import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import DisplayViewBooks                   from './components/DisplayViewBooks/DisplayViewBooks';
import Book                               from './components/DisplayViewBooks/LibraryElements/Book/Book';
import Layout                             from './components/Layout';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<DisplayViewBooks />} />
            <Route path="book/:id" element={<Book />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
