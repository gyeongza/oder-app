import Layout from '../layouts/Layout';
import Header from '../components/common/Header';
import FixedBottomSheet from '../components/common/FixedBottomSheet';
import OrderList from '../components/order/OrderList';
import { Suspense } from 'react';
import Text from '../components/common/Text';

function Order() {
  return (
    <Layout>
      <Header />
      <Suspense
        fallback={<Text textAlign="center">목록을 불러오는 중입니다.</Text>}
      >
        <OrderList />
      </Suspense>
      <FixedBottomSheet />
    </Layout>
  );
}

export default Order;
