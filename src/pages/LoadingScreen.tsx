import { Heart } from 'lucide-react';
import '../styles/LoadingScreen.css';

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <Heart className="heart-icon" size={48} />
    </div>
  );
}
