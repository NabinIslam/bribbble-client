import { RouterProvider } from 'react-router-dom';
import router from './routes/router';

export default function App() {
  return (
    <div className="min-h-full">
      <RouterProvider router={router} />
    </div>
  );
}
