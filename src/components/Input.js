import * as Styled from './Input.styled';

const Input = ({ label, id, ...restProps }) => {
  return (
    <Styled.InputWrapper>
      {label && <Styled.Label htmlFor={id}>{label}</Styled.Label>}
      <Styled.Input id={id} {...restProps} />
      <Styled.Line />
    </Styled.InputWrapper>
  );
};

export default Input;
