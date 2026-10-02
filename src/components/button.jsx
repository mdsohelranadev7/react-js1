

const Button = ({btntexts,color}) => {
  return (
    <button className={`${color} py-5 px-8 m-2 rounded-2xl`}>{btntexts}</button>
  )
}

export default Button