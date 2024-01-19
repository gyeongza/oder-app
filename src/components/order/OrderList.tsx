import { useRecoilValue } from 'recoil';
import { itemListSelector } from '../../atoms/item';
import styled from '@emotion/styled';
import OrderItem from './OrderItem';

function OrderList() {
  const items = useRecoilValue(itemListSelector);

  if (items == null) {
    return null;
  }

  return (
    <Container>
      <ItemListContainer>
        {items.map((item) => {
          return <OrderItem key={item.id} product={item} />;
        })}
      </ItemListContainer>
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  height: calc(100% - 227px);
  overflow: hidden auto;
`;

const ItemListContainer = styled.ul`
  padding: 18px 25px;
`;

export default OrderList;
