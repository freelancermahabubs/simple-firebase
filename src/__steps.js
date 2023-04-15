/**
 * *        ---------------------------
 *           INITIAL INSTALLATION
 *         --------------------------
 * 1. Visit: Console.firebase.google.come
 * 2. Create a Project (skip google Analytics)
 * 3. Register App (Create config)
 * 4. Install Firebase: Npm install firebase
 * 5. add config file to your project
 * 6. DANGER: Do not publish or make Firebase config  to public by pushing those to github
 *                    ----------------
 *                       INTEGRATION
 *                    -------------------
 * 7. Visit Go to Docs > Build > Authentication > Web > Get Started
 * 8. Export app form the firebase.config.js file: export default app.
 * 9. Login.jsx: import getAuth From firebase/auth
 * 10. Create Const Auth = getAuth(app)
 *               ------------------------
 *                       PROVIDER SETUP
 *                -----------------------------
 * 11. Import GoogleAuthProvider and Create new Provider
 * 12. Use SingInWithPopup and pass auth and provider
 * 13. Activate Sing-ing method (Google, facebook, github, etc).
 *14. [Vite]: change 127.0.0.1 to localhost
 *                        --------------------
 *                           MORE AUTH PROVIDER
 *                         --------------------
 *
 * 1. Activate The Auth Provider (Create app, provide redirect url, client id, client secret)
 * */
