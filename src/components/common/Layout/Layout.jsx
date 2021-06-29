import Header from '../Header/Header';
import * as S from './styled';

function Layout({ children }) {
  return (
    <>
      <Header />
      <S.Main>{children}</S.Main>
    </>
  );
}

export default Layout;
