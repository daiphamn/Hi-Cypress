export const CommonLocator = {
	linkByText: (linkText) => `//a[text()="${linkText}"]`,
	linkByPartialText: (linkText) => `//a[contains(text(),"${linkText}")]`,
	buttonByText: (buttonText) => `//button[text()="${buttonText}"]`
}