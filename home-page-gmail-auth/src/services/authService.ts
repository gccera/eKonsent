export const signInWithGmail = async (): Promise<void> => {
    try {
        const provider = new window.google.accounts.oauth2.GoogleAuthProvider();
        const result = await window.google.accounts.oauth2.signInWithPopup(provider);
        const user = result.user;

        // Handle user data and authentication response here
        console.log('User signed in:', user);
    } catch (error) {
        console.error('Error during Gmail sign-in:', error);
    }
};