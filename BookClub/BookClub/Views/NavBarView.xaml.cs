namespace BookClub.Views;

public partial class NavBarView : ContentView
{
	public NavBarView()
	{
		InitializeComponent();
        BindingContext = this;
	}
    public static readonly BindableProperty IsNavigationBackNormalProperty =
BindableProperty.Create(nameof(Text), typeof(bool), typeof(NavBarView), true, defaultBindingMode: BindingMode.OneWay,
propertyChanged: IsNavigationBackChanged
);

    private static void IsNavigationBackChanged(BindableObject bindable, object oldValue, object newValue)
    {
        var nav = bindable as NavBarView;

        nav.IsNavigationBackNormal = (bool)newValue;
    }

    public static readonly BindableProperty TextProperty =
  BindableProperty.Create(nameof(Text), typeof(string), typeof(NavBarView), string.Empty, defaultBindingMode: BindingMode.OneWay,
      propertyChanged: TextChanged
      );

    private static void TextChanged(BindableObject bindable, object oldValue, object newValue)
    {
        var nav = bindable as NavBarView;

        nav.Text = (string)newValue;
    }

    public bool IsNavigationBackNormal
    {
        get => (bool)GetValue(IsNavigationBackNormalProperty);
        set => SetValue(IsNavigationBackNormalProperty, value);
    }
    public string Text
    {
        get => (string)GetValue(TextProperty);
        set => SetValue(TextProperty, value);
    }

    public delegate void DifferentBack();
    public event DifferentBack BackButtonEventPressed;


    private async void TapGestureRecognizer_Tapped(object sender, EventArgs e)
    {
        if (IsNavigationBackNormal)
            await Shell.Current.GoToAsync("..");
        else
        {
            BackButtonEventPressed?.Invoke();
        }
    }
}