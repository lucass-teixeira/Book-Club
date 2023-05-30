using BookClub.Pages;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookClub.ViewModel
{
    public partial class LoginViewModel : BaseViewModel
    {
        //AuthenticationService _authenticationService;
        public LoginViewModel()
        {
            //_authenticationService = authenticationService;
        }

        //[ObservableProperty]
        //FullUser user = new FullUser();

        [ObservableProperty]
        //[AlsoNotifyChangeFor(nameof(IsPassword))]
        bool isEmail = true;

        [ObservableProperty]
        bool keepConnected = true;

        public bool IsPassword => !IsEmail;

        [RelayCommand]
        async Task Login()
        {
            //if (IsBusy) return;
            //if (string.IsNullOrEmpty(User.Email))
            //{
            //    await App.Current.MainPage.DisplayAlert("Alert", "Email cannot be empty.", "ok");
            //    return;
            //}


            //if (KeepConnected)
            //    Preferences.Set("KeepConnected", true);
            //else
            //    Preferences.Set("KeepConnected", false);


            //this.IsBusy = true;
            //FullUser userWithProfile = new FullUser();
            //userWithProfile.Password = User.Password;
            //userWithProfile.Email = User.Email;
            //await _authenticationService.LoginUser(userWithProfile);
            //this.IsBusy = false;
            this.IsBusy = true;
            //await Shell.Current.GoToAsync($"//{nameof(HomePage)}", true, dictionary);
            await Shell.Current.GoToAsync($"//{nameof(HomePage)}");
            this.IsBusy = false;

        }

        [RelayCommand]
        void ChooseEmail()
        {
            var loginPage = AppShell.Current.CurrentPage as LoginPage;
            loginPage.ShowEmailContainer();
        }

        [RelayCommand]
        async Task GoToSignUpPage()
        {
            if (IsBusy) return;
            this.IsBusy = true;
            await Shell.Current.GoToAsync($"//{nameof(LoginPage)}/{nameof(SignUpPage)}");
            this.IsBusy = false;

        }

    }
}
