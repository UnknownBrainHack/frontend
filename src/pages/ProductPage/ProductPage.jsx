import React, { useState } from 'react';
import DropArea from '../../components/ui/DropArea/DropArea';
import Dragon from '../../images/RussianDragon.png';
import Tabs from '../../components/ui/Tabs';
import Button from '../../components/ui/Button/Button';
import { SubTitle } from '../Items/styled';
import ProductList from '../../components/common/ProductList/ProductList';
import { LeftSection, RightSection } from '../AddItem/styled';
import Modal from '../../components/ui/Modal/Modal';
import {
  DescriptionWrapper,
  ProductPageWrapper,
  ModalContainer,
  Description,
  TopContainer,
  ActionButtons,
} from './styled';
import { Container } from '../../components/ui/styled';
import InputField from '../../components/ui/InputField/InputField';

function ProductPage({ products }) {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    price:""
  });
  const handlerPrice = (e) => {
    if (e.target.value.length > 15) {
      return;
    }
    setState(p=>({...p,price:e.target.value}));
  };
  console.log("products", products);
  return (
    <Container>
      <ProductPageWrapper
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 200 }}
        transition={{ duration: 0.2 }}
      >
        <TopContainer>
          <LeftSection>
            <DropArea disabled image={Dragon} />
          </LeftSection>
          <RightSection>
            <h4>Hey there</h4>
            <div className="creator__container">
              <p>Creator</p>
              <div className="creator__user">
                {/*<Image src={Dragon} alt="" />*/}
                <span className="creator__name">Mike Wazowski</span>
              </div>
            </div>
            <Tabs>
              <div title="Rates">
                <div>Hello</div>
                <div>Hello</div>
                <div>Hello</div>
                <div>Hello</div>
                <div>Hello</div>
              </div>
              <div title="Experts">
                <div className="experts__wrapper">
                  <div className="experts__image">
                    {/*<Image src={Dragon} alt="" />*/}
                  </div>
                  <div className="experts__user">
                    <span className="experts__name">Johnny Wreck</span>
                    <p>
                    Rate: <span>2 ETH</span>
                    </p>
                    <p>
                    Date: <span>2 July</span>
                    </p>
                  </div>
                </div>
                <div className="experts__wrapper">
                  <div className="experts__image">
                    {/*<Image src={Dragon} alt="" />*/}
                  </div>
                  <div className="experts__user">
                    <span className="experts__name">Johnny Wreck</span>
                    <p>
                    Rate: <span>2 ETH</span>
                    </p>
                    <p>
                    Date: <span>2 July</span>
                    </p>
                  </div>
                </div>
                <div className="experts__wrapper">
                  <div className="experts__image">
                    {/*<Image src={Dragon} alt="" />*/}
                  </div>
                  <div className="experts__user">
                    <span className="experts__name">Johnny Wreck</span>
                    <p>
                    Rate: <span>2 ETH</span>
                    </p>
                    <p>
                    Date: <span>2 July</span>
                    </p>
                  </div>
                </div>
                <div className="experts__wrapper">
                  <div className="experts__image">
                    {/*<Image src={Dragon} alt="" />*/}
                  </div>
                  <div className="experts__user">
                    <span className="experts__name">Johnny Wreck</span>
                    <p>
                    Rate: <span>2 ETH</span>
                    </p>
                    <p>
                    Date: <span>2 July</span>
                    </p>
                  </div>
                </div>
              </div>
            </Tabs>
            <ActionButtons>
              <Button>Buy for 2.525 ETH</Button>
              <Button secondary onClick={() => setOpen(true)}>
                Rate item
              </Button>
            </ActionButtons>
            <Modal open={open} title="Rate ProductPage" onClose={() => setOpen(false)}>
              <ModalContainer>
                <InputField
                  suggestion={"ETH"}
                  value={state.price}
                  onChange={handlerPrice}
                  placeholder={'2.7 ETH'}
                  title={'Input Potential Price'}
                />
                <InputField
                  placeholder={'2 weeks'}
                  title={'Deadline of selling'}
                />
                <Button onClick={() => setOpen(false)}>Rate ProductPage</Button>
                <Button onClick={() => setOpen(false)} simple>
                  Cancel
                </Button>
              </ModalContainer>
            </Modal>
          </RightSection>
        </TopContainer>
        <SubTitle>About ProductPage</SubTitle>
        <DescriptionWrapper>
          <Description>
            "The Ninth Wave" is one of the most famous paintings by the Russian
            marine painter of Armenian origin Ivan Aivazovsky, kept in the
            Russian Museum in St. Petersburg (inv. Zh-2202) [1]. Written in
            1850. <br />
            <br />
            The painter depicts the sea after a very strong night storm and
            people who were shipwrecked. The sun's rays illuminate huge waves.
            The largest of them - the ninth shaft - is ready to fall on people
            trying to escape on the wreckage of the mast.
          </Description>
        </DescriptionWrapper>
        <SubTitle>Items For You</SubTitle>
        <ProductList cards={products} slider={{ overflow: true }}></ProductList>
      </ProductPageWrapper>
    </Container>
  );
}

ProductPage.getInitialProps = async () => {
  const [products = []] = await Promise.all([
    (async () => {
      // eslint-disable-next-line no-undef
      const data = await fetch(`${process.env.BASIC_HOST}/tmp/products.json`);
      return data.json();
    })(),
  ]);
  return {
    products,
  };
};

export default ProductPage;
