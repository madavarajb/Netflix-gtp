import { db } from "./Firebase"; // Import Firestore database instance
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

/**
 * Add a movie to the user's Firestore watchlist
 */
export const addToFirestoreWatchlist = async (userId, movie) => {
  if (!userId) return;

  const userWatchlistRef = doc(db, "watchlists", userId);

  try {
    await setDoc(
      userWatchlistRef,
      { movies: arrayUnion(movie) },
      { merge: true }
    );
  } catch (error) {
    console.error("Error adding to Firestore watchlist:", error);
  }
};

/**s
 * Remove a movie from the user's Firestore watchlist
 */
export const removeFromFirestoreWatchlist = async (userId, movieId) => {
  if (!userId) return;

  const userWatchlistRef = doc(db, "watchlists", userId);

  try {
    const docSnap = await getDoc(userWatchlistRef);
    if (docSnap.exists()) {
      const currentMovies = docSnap.data().movies || [];
      const updatedMovies = currentMovies.filter(
        (movie) => movie.id !== movieId
      );

      await updateDoc(userWatchlistRef, { movies: updatedMovies });
    }
  } catch (error) {
    console.error("Error removing from Firestore watchlist:", error);
  }
};

/**
 * Fetch the user's watchlist from Firestore
 */
export const fetchFirestoreWatchlist = async (userId) => {
  if (!userId) return [];

  const userWatchlistRef = doc(db, "watchlists", userId);

  try {
    const docSnap = await getDoc(userWatchlistRef);
    return docSnap.exists() ? docSnap.data().movies || [] : [];
  } catch (error) {
    console.error("Error fetching Firestore watchlist:", error);
    return [];
  }
};
