type IButtonProps = {
  xl?: boolean;
  children: string;
};

export const LandingButton = (props: IButtonProps) => {
  return (
    <div
      className={`btn inline-block rounded-md text-center btn-primary text-white bg-primary-500 hover:bg-primary-600 ${
        props.xl
          ? 'btn-xl text-lg font-semibold py-2 px-4'
          : 'btn-base font-extrabold text-xl py-4 px-6'
      }`}
    >
      {props.children}
    </div>
  );
};

export default LandingButton;
