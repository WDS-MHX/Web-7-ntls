import styles from './copyright.module.css'

function Copyright() {
    return(
        <>
        <div className={styles['copyright']}>
            <div className={styles['container-footer']}>
                <div>ĐƠN VỊ THỰC HIỆN:</div> 
                <img src="src\components\img\logo copy.png"/>
                <div>HỘI SINH VIÊN TRƯỜNG ĐẠI HỌC CÔNG NGHỆ THÔNG TIN, ĐHQG-HCM</div> 
            </div>
            <div className={styles['dated']}>Tháng 7/2024</div>
        </div>
        </>
    )
}

export default Copyright;
