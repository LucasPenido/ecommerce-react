import classes from './sideBar.module.css';

export default function SideBar(props) {
  
  function clickHandler(event) {
    props.setOrderBySelected(event.target.value);
  }

  return (
    <section className={classes.sideBar}>
      <form onChange={clickHandler}>
        <h4>Order By:</h4>
        <div className={classes.radio}>
          <input type='radio' id='name' name='orderBy' value='name' />
          <label>Name</label>
        </div>
        <div className={classes.radio}>
          <input type='radio' id='score' name='orderBy' value='score' />
          <label>Score</label>
        </div>
        <div className={classes.radio}>
          <input type='radio' id='price' name='orderBy' value='price' />
          <label>Price</label>
        </div>
      </form>
    </section>
  );
}
