import styled from 'styled-components/native';
import {FlatList} from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const FilterContainer = styled.View`
  margin-top: 60px;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;

export const FilterButton = styled.TouchableOpacity`
  border: 1px solid #333;
  padding: 10px;
  border-radius: 6px;
`;

export const FilterText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #e83f5b;
`;

export const ProductContainer = styled.SafeAreaView`
  border-radius: 5px;
  margin-top: 10px;
  flex: 1;
  flex-direction: row;
`;

export const ProductList = styled(FlatList).attrs({
  numColumns: 2,
})`
  flex: 1;
  padding: 0 10px;
`;

export const Product = styled.View`
  background: #fff;
  padding: 16px 16px;
  border-radius: 5px;
  margin: 8px;
  flex: 1;
`;

export const ProductImage = styled.Image`
  height: 122px;
  width: 122px;
  align-self: center;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  margin-top: 10px;
`;

export const ProductScore = styled.Text`
  font-size: 14px;
  margin-top: 10px;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  margin-top: auto;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #e83f5b;
`;

export const ProductButton = styled.TouchableOpacity`
  padding: 8px;
`;

export const ProductButtonText = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;
