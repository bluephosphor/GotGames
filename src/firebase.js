// Firebase imports
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, query, where, orderBy, limit} from 'firebase/firestore';
import { auth } from 'firebase/auth';
import { functions } from 'firebase/functions';

import { ref, onUnmounted } from 'vue'

//Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDcSb3a8xBXAb2vq6XgcHFlneErrghK72c",
  authDomain: "portfolio-9bd65.firebaseapp.com",
  projectId: "portfolio-9bd65",
  storageBucket: "portfolio-9bd65.appspot.com",
  messagingSenderId: "490093671642",
  appId: "1:490093671642:web:e1eed53da34657396861e3",
  measurementId: "G-WB316ZJT30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const gamesCollection = collection(db, 'games');

function dom_decoder (str) {
    let parser = new DOMParser();
    let dom = parser.parseFromString(`<string> ${str} </string>`, 'text/html');
    return dom.querySelector('string').innerText;
}

function decoder (str) {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = str;
    return textArea.innerText;
}

export default {
  gameQuery: async function(searchTerms){
    const q = query(
        gamesCollection, 
        where('recplayers', '==', searchTerms.playerNum),
        //orderBy('playingtime', 'desc'),
        //limit(50)
    );
    const snap = await getDocs(q);
    const list = snap.docs.map(doc => doc.data())
    .filter(item => {
            
            item.description = dom_decoder(item.description);
            
            return (
                item.minage      <= searchTerms.minAge &&
                item.playingtime <= searchTerms.playTime
            )
        }
    );
    return list;
  },
}