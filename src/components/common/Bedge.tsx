import styled from '@emotion/styled';
import Text from './Text';
import { colors } from '../../styles/colorPalette';

interface BedgeProps {
  label: string;
}

function Bedge({ label }: BedgeProps) {
  return (
    <Container>
      <Text typography="t3" color="white">
        {label}
      </Text>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 12px;
  background-color: ${colors.orange100};
  padding: 2px 8px;
`;

export default Bedge;
