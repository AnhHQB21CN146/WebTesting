import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js"
const firebaseConfig = {
apiKey: "AIzaSyB7BOAByOOhtWSqFfxj_fCMiDUtHlP37mE",
authDomain: "test-account-17093.firebaseapp.com",
projectId: "test-account-17093",
storageBucket: "test-account-17093.appspot.com",
messagingSenderId: "321407649829",
appId: "1:321407649829:web:e8db62845f433a803ed7cc",
measurementId: "G-EPM2QR021W"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

var loginGoogleButton = document.getElementById('login-google-button');
loginGoogleButton.addEventListener('click', function (event) {
    event.preventDefault()
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        window.location.href="home.html";
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var loginButton = document.getElementById('login-button');

    loginButton.addEventListener('click', function (event) {
        event.preventDefault(); 
        var email = document.getElementById('Email').value;
        var password = document.getElementById('M-t-kh-u').value;

        console.log('Email:', email);
        console.log('Password:', password);

        if (email === '' || password === '') {
            alert('Vui lòng nhập email và mật khẩu');
        } else {
            alert('Đăng nhập thành công');
        }
    });
});
