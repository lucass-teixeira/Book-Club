using BookClub.ViewModel;

namespace BookClub.Pages;

public partial class LoginPage : ContentPage
{
	public LoginPage(LoginViewModel loginViewModel)
	{
		InitializeComponent();
        BindingContext = loginViewModel;
	}
    public async void ShowEmailContainer()
    {
        chooseEmailStack.Opacity = 0;
        chooseEmailStack.IsVisible = true;

        await chooseSignInStack.FadeTo(0);
        _ = chooseEmailStack.FadeTo(1);
    }
}