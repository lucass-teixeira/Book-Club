using CommunityToolkit.Mvvm.ComponentModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookClub.ViewModel
{
    public partial class BaseViewModel : ObservableObject
    {
        [ObservableProperty]
        string title;

        [ObservableProperty]
        bool canAnimate;

        [ObservableProperty]
        [NotifyPropertyChangedFor(nameof(IsNotBusy))]
        //[AlsoNotifyChangeFor(nameof(IsNotBusy))]
        bool isBusy;
        public BaseViewModel()
        {

        }
        public bool IsNotBusy => !IsBusy;
    }
}
