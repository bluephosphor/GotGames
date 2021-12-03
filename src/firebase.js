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

async function gameQuery(searchTerms){
    const q = query(
        gamesCollection, 
        where('playingtime', '<=', searchTerms.playTime),
        orderBy('playingtime', 'desc'),
        //limit(50)
    );
    const snap = await getDocs(q);
    const list = snap.docs.map(doc => doc.data())
                        .filter(item => 
                            item.minplayers >= searchTerms.playerMin &&
                            item.maxplayers <= searchTerms.playerMax &&
                            item.minage     <= searchTerms.minAge
                        )
    return list;
}

export default gameQuery;