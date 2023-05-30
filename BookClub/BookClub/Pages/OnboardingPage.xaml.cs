using BookClub.ViewModel;

namespace BookClub.Pages;

public partial class OnboardingPage : ContentPage
{
	public OnboardingPage(OnBoardingPageVM viewModel)
	{
		InitializeComponent();
		BindingContext = viewModel;
	}

	//public string imgUrl { get; set; } = "https://images.pexels.com/photos/2925303/pexels-photo-2925303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
}