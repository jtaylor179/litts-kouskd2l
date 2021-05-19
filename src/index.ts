import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';







  const firebaseConfig = {
  apiKey: "AIzaSyAP1MICsZ1gdOR2BVZrP4LNaXuxVZrRVUM",
  authDomain: "friendly-chat-7abf1.firebaseapp.com",
  projectId: "friendly-chat-7abf1",
  storageBucket: "friendly-chat-7abf1.appspot.com",
  messagingSenderId: "702879392834",
  appId: "1:702879392834:web:6f5e78a8a7519633ecf9db"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = getFirestore();


try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}


const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});


@customElement('my-counter')
export class SimpleGreeting extends LitElement {
  @property() public count = 0;




  static styles = css`
      * {
        font-size: 200%;
      }

      span {
        width: 4rem;
        display: inline-block;
        text-align: center;
      }

      button {
        width: 4rem;
        height: 4rem;
        border: none;
        border-radius: 10px;
        background-color: seagreen;
        color: white;
      }`;

  render() {



    return html`
      <button @click="${this.dec}">-</button>
      <span>${this.count}</span>
      <button @click="${this.inc}">+</button>
    `;
  }

  inc() {
    this.count++;
  }

  dec() {
    this.count--;
  }

}
