type ButtonPropsType = {
  callback: () => void // НУЖНО ПРОТИПИЗИРОВАТЬ
  name: string // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Button = (props: ButtonPropsType) => {
  const callBackHandler = () => {
    // НУЖНО ДОПИСАТЬ
    props.callback();
  };

  return (
    <button id={'hw04-button'} onClick={callBackHandler}>
      {props.name}
    </button>
  );
};
