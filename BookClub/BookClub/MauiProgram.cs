using BookClub.Pages;
using BookClub.ViewModel;
using CommunityToolkit.Maui;
using Microsoft.Extensions.Logging;

namespace BookClub;

public static class MauiProgram
{
	public static MauiApp CreateMauiApp()
	{
		var builder = MauiApp.CreateBuilder();
		builder
			.UseMauiApp<App>()
			.UseMauiCommunityToolkit()
			.ConfigureFonts(fonts =>
			{
				fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
				fonts.AddFont("OpenSans-Semibold.ttf", "OpenSansSemibold");

                fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
                fonts.AddFont("OpenSans-Semibold.ttf", "OpenSansSemibold");
                fonts.AddFont("Prompt-ExtraLight.ttf", "PromptExtraLight");
                fonts.AddFont("Prompt-Medium.ttf", "PromptMedium");
                fonts.AddFont("secondicons.ttf", "SecondIcons");
            });

        builder.Services.AddSingleton<OnboardingPage>();

		builder.Services.AddSingleton<OnBoardingPageVM>();

		builder.Services.AddTransient<LoginPage>();
		builder.Services.AddTransient<LoginViewModel>();

#if DEBUG
        builder.Logging.AddDebug();
#endif

		return builder.Build();
	}
}
