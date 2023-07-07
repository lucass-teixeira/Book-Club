import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { ApiService } from './shared/services/api.service';
import { Book, BookClub, BookStudy, WordInfo } from './shared/models/models';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalTutorialComponent } from './components/modal-tutorial/modal-tutorial.component';
import { ModalKnowWordComponent } from './components/modal-know-word/modal-know-word.component';
import Peer from 'peerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('sectionAnim', [

      transition('* => void', [
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0)',
          'margin-bottom': 0,

          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0
        }),

        animate('50ms', style({
          height: '*',
          'margin-bottom': '*',
          paddingTop: '*',
          paddingBottom: '*',
          paddingLeft: '*',
          paddingRight: '*'
        })),

        animate(7000)
      ]),

      transition('* => void', [
        animate(50, style({
          transform: 'scale(1.05)'
        })),

        animate(50, style({
          transform: 'scale(1)',
          opacity: 0.75
        })),

        //scale down and fade out
        animate('120ms ease-out', style({
          transform: 'scale(0.68)',
          opacity: 0
        }))
      ])
    ])

  ]
})
export class AppComponent {
  title = 'book-club-website';
  isLoggedIn = false;
  books: Book[] = [];
  selectedBook: Book | undefined;
  booksId: string[] = ['7mmNEAAAQBAJ', 'sIEtjgEACAAJ', 'qbw4DwAAQBAJ', 'DxtkwAEACAAJ']
  modalRef: MdbModalRef<ModalTutorialComponent> | null = null;
  bookDetail: BookStudy | null = null;
  texts: WordInfo[] = [];
  step = 0;


  showCommunityContainer = false;
  showClubsContainer = true;
  bookClubs: BookClub[] = [];

  loggedIn(event: any) {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
    this.showCommunityContainer = false;
    this.step = 0;
  }


  searchTerm: string = ''
  finalText: string = ''

  ngOnInit(): void {
    this.loadData();

    this.getPeerId();
  }
  constructor(public apiService: ApiService, private modalService: MdbModalService) {
    this.peer = new Peer();
   }

  assignSearchTerm(event: any) {
    this.finalText = this.finalText + event.data.toString().replace(' ', '+');
    console.log(this.finalText)
    this.searchTerm = this.finalText
  }
  loadData() {
    this.searchTerm = 'The cat in the hat'

    this.books = this.apiService.getBooksData();

    this.bookClubs = this.apiService.getBookClubs();
    console.log('bookclubs', this.bookClubs)

    this.bookDetail = this.apiService.getA1level();
    const detail = this.apiService.getDataFinished();
    console.log(detail)
    this.texts = this.apiService.getDataFinished();

  }

  steps() {

    return this.step;
  }

  chooseLevel() {
    this.step++;

  }

  selectBook(book: Book) {
    this.step++;
    this.selectedBook = book;
  }

  visitWebsiteBook() {
    window.open(this.selectedBook?.volumeInfo.previewLink)
  }

  openTutorialModal() {
    this.modalService.open(ModalTutorialComponent).onClose.subscribe(data => {
      this.step++;

    });
  }

  openKnownWordModal(word: WordInfo) {
    this.modalService.open(ModalKnowWordComponent, {
      data: {
        word
      }
    }).onClose.subscribe(data => {
    });
  }

  showCommunity(){
    this.showCommunityContainer = true;
  }

  goToGroup(group: BookClub){
    this.showClubsContainer = false;
  }


  private peer: Peer;
  peerIdShare!: string;
  peerId!: string;

  private lazyStream: any;
  currentPeer: any;
  private peerList: Array<any> = [];



  private getPeerId = () => {
    this.peer.on('open', (id) => {
      this.peerId = id;
      console.log(this.peerId);
    });

    this.peer.on('call', (call) => {
      navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      }).then((stream) => {
        this.lazyStream = stream;

        call.answer(stream);
        call.on('stream', (remoteStream) => {
          if (!this.peerList.includes(call.peer)) {
            this.streamRemoteVideo(remoteStream);
            this.currentPeer = call.peerConnection;
            this.peerList.push(call.peer);
          }
        });
      }).catch(err => {
        console.log(err + 'Unable to get media');
      });
    });
  }

  connectWithPeer(): void {
    this.callPeer(this.peerIdShare);
  }

  private callPeer(id: string): void {
    if (navigator.mediaDevices) {
      navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      }).then((stream) => {
        this.lazyStream = stream;


        const call = this.peer.call(id, stream);
        call.on('stream', (remoteStream) => {
          if (!this.peerList.includes(call.peer)) {
            this.streamRemoteVideo(remoteStream);
            this.currentPeer = call.peerConnection;
            this.peerList.push(call.peer);
          }
        });
      }).catch(err => {
        console.log(err + 'Unable to connect');
      });
    }
    else{
      console.warn('Navigator is null')
    }
  }


  private streamRemoteVideo(stream: any): void {
    const video = document.createElement('video');
    video.classList.add('video');
    video.srcObject = stream;
    video.play();

    document.getElementById('remote-video')!.append(video);
  }

  screenShare(): void {
    this.shareScreen();
  }

  private shareScreen(): void {
    // @ts-ignore
    navigator.mediaDevices.getDisplayMedia({
      video: {

      },
      audio: {
        echoCancellation: true,
        noiseSuppression: true
      }
    }).then(stream => {
      const videoTrack = stream.getVideoTracks()[0];
      videoTrack.onended = () => {
        this.stopScreenShare();
      };

      const sender = this.currentPeer.getSenders().find((s: any) => s.track.kind === videoTrack.kind);
      sender.replaceTrack(videoTrack);
    }).catch(err => {
      console.log('Unable to get display media ' + err);
    });
  }

  private stopScreenShare(): void {
    const videoTrack = this.lazyStream.getVideoTracks()[0];
    const sender = this.currentPeer.getSenders().find((s: any) => s.track.kind === videoTrack.kind);
    sender.replaceTrack(videoTrack);
  }
}
