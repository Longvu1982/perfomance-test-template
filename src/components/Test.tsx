import styles from "./Test.module.scss";

const Test = () => {
    return (
        <div className={styles.container}>  {/** normal scss */}
            <h1 className="p-4 text-white">Test component</h1> {/** tailwind scss */}
        </div>
    );
};

export default Test;
