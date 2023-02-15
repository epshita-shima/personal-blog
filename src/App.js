import './App.css';
import Header from './component/Header/Header';
import Main from './component/Main/Main'
import RecentPost from './component/RecentPost/RecentPost';
import TredingNew from './component/TredPart/TredingNew';
function App() {
  return (
    <div className='container'>
      <div className='border-b-2 border-black'>
        <Header></Header>
      </div>
      <div className='border-b-2 border-black'>
        <Main></Main>
      </div>
      <div className='border-b-2 border-gray-300'>
        <TredingNew></TredingNew>
      </div>
      <RecentPost></RecentPost>
    </div>
  );
}

export default App;
