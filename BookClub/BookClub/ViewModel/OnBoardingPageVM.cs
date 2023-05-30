using BookClub.Pages;
using CommunityToolkit.Mvvm.Input;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookClub.ViewModel
{
    public partial class OnBoardingPageVM : BaseViewModel 
    {
        [RelayCommand]
        public async Task GoToLoginPage()
        {
            this.IsBusy = true;
            await Shell.Current.GoToAsync($"//{nameof(OnboardingPage)}/{nameof(LoginPage)}");
            this.IsBusy = false;
        }

        [RelayCommand]
        public async Task GoToSignUpPage()
        {
            this.IsBusy = true;
            await Shell.Current.GoToAsync($"//{nameof(OnboardingPage)}/{nameof(SignUpPage)}");
            this.IsBusy = false;
        }
    }
}
