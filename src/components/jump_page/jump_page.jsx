import React, { useState } from 'react';
import styles from './jump_page.module.css';

function JumpPage() {
  const [showInfo, setShowInfo] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  const handleImageClick = (info) => {
    setShowInfo(info);
  };

  const handleCloseClick = (e) => {
    e.stopPropagation();
    setShowInfo(null);
  };

  const handleComingSoonButtonClick = (e) => {
    e.stopPropagation();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const locations = [
    {
      id: 'tphcm',
      imgSrc: 'src/components/img/img_nt/tphcm.png',
      alt: 'Nghĩa trang Liệt sĩ TP.HCM',
      title: 'Nghĩa trang Liệt sĩ',
      buttonLabel: 'Thành phố Hồ Chí Minh',
      info: (
        <>
          <p><strong>Địa chỉ:</strong> Xa lộ Hà Nội, khu phố Giãn Dân, phường Long Bình, thành phố Thủ Đức, TP. HCM</p>
          <p><strong>Diện tích:</strong> 30 ha</p>
          <p><strong>Năm xây dựng:</strong></p>
          <p><strong>Số lượng mộ liệt sĩ:</strong> Hơn 15,000 mộ</p>
        </>
      ),
      buttonUrl: 'https://tphcm.anhhunglietsi.vn/',
    },
    {
      id: 'cuchi',
      imgSrc: 'src/components/img/img_nt/cuchi.png',
      alt: 'Nghĩa trang Liệt sĩ Củ Chi',
      title: 'Nghĩa trang Liệt sĩ',
      buttonLabel: 'Củ Chi',
      info: (
        <>
          <p><strong>Địa chỉ:</strong> Tỉnh Lộ 15, An Nhơn Tây, Củ Chi, TP. HCM</p>
          <p><strong>Diện tích:</strong> Khoảng 7 ha</p>
          <p><strong>Năm xây dựng:</strong></p>
          <p><strong>Số lượng mộ liệt sĩ:</strong> Hơn 3,000 mộ</p>
        </>
      ),
      buttonUrl: 'https://ahls-cu-chi.web.app/',
    },
    {
      id: 'cangio',
      imgSrc: 'src/components/img/img_nt/cangio.png',
      alt: 'Nghĩa trang Liệt sĩ Rừng Sác',
      title: 'Nghĩa trang Liệt sĩ',
      buttonLabel: 'Rừng Sác',
      info: (
        <>
          <p><strong>Địa chỉ:</strong> Đường Duyên Hải, thị trấn Cần Thạnh, huyện Cần Giờ, TP. HCM</p>
          <p><strong>Diện tích:</strong> Khoảng 20 ha</p>
          <p><strong>Năm xây dựng:</strong></p>
          <p><strong>Số lượng mộ liệt sĩ:</strong> Hơn 2,000 mộ</p>
        </>
      ),
      buttonUrl: 'https://cangiorungsac.anhhunglietsi.vn/',
    },
    {
      id: 'binhchanh',
      imgSrc: 'src\\components\\img\\img_nt\\binh chanh.png',
      alt: 'Nghĩa trang Liệt sĩ Bình Chánh',
      title: 'Nghĩa trang Liệt sĩ',
      buttonLabel: 'Bình Chánh',
      info: (
        <>
          <p><strong>Địa chỉ:</strong> 1A Quốc lộ, phường Tân Tạo, quận Bình Tân, TP. HCM</p>
          <p><strong>Diện tích:</strong> Khoảng 5 ha</p>
          <p><strong>Năm xây dựng:</strong></p>
          <p><strong>Số lượng mộ liệt sĩ:</strong> Hơn 1,900 mộ</p>
        </>
      ),
      buttonUrl: 'https://nghiatranglietsibinhchanhbinhtan.vn/',
    },
    {
      id: 'nhabe',
      imgSrc: 'src\\components\\img\\img_nt\\nha be.png',
      alt: 'Nghĩa trang Liệt sĩ Nhà Bè',
      title: 'Nghĩa trang Liệt sĩ',
      buttonLabel: 'Nhà Bè',
      info: (
        <>
          <p><strong>Địa chỉ:</strong> 508 Huỳnh Tấn Phát, Bình Thuận, Quận 7, TP. HCM</p>
          <p><strong>Diện tích:</strong> Khoảng 4 ha</p>
          <p><strong>Năm xây dựng:</strong></p>
          <p><strong>Số lượng mộ liệt sĩ:</strong> Hơn 1,000 mộ</p>
        </>
      ),
    },
    {
      id: 'hocmon',
      imgSrc: 'src\\components\\img\\img_nt\\hocmon.png',
      alt: 'Nghĩa trang Liệt sĩ Hóc Môn',
      title: 'Nghĩa trang Liệt sĩ',
      buttonLabel: 'Hóc Môn',
      info: (
        <>
          <p><strong>Địa chỉ:</strong> Đường Tân Thới Nhì, xã Tân Thới Nhì, huyện Hóc Môn, TP. HCM</p>
          <p><strong>Diện tích:</strong> Khoảng 3 ha</p>
          <p><strong>Năm xây dựng:</strong></p>
          <p><strong>Số lượng mộ liệt sĩ:</strong> Hơn 800 mộ</p>
        </>
      ),
    },
    {
      id: 'thuduc',
      imgSrc: 'src\\components\\img\\img_nt\\tp thu duc.png',
      alt: 'Nghĩa trang Liệt sĩ Thủ Đức',
      title: 'Nghĩa trang Liệt sĩ',
      buttonLabel: 'Thủ Đức',
      info: (
        <>
          <p><strong>Địa chỉ:</strong> Đường Kha Vạn Cân, phương Linh Trung, thành phố Thủ Đức, TP. HCM</p>
          <p><strong>Diện tích:</strong> Khoảng 6 ha</p>
          <p><strong>Năm xây dựng:</strong></p>
          <p><strong>Số lượng mộ liệt sĩ:</strong> Hơn 2,500 mộ</p>
        </>
      ),
    }, 
  ];

  return (
    <div className={styles['grid-container']}>
      {locations.map((location) => (
        <div key={location.id} className={styles['container']}>
          <div className={styles['image']} onClick={() => handleImageClick(location.id)}>
            <img src={location.imgSrc} alt={location.alt} />
            <div className={`${styles['overlay']} ${showInfo === location.id ? styles['overlay-show'] : ''}`}>
              {showInfo === location.id ? (
                <>
                  <button className={styles['close-button']} onClick={handleCloseClick}>X</button>
                  <div className={styles['extra-info']}>
                    <h1>Thông tin chi tiết</h1>
                    {location.info}
                  </div>
                </>
              ) : (
                <>
                  <h1>{location.title}</h1>
                  <button
                    className={styles['button']}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (location.id === 'hocmon' || location.id === 'nhabe' || location.id === 'thuduc') {
                        handleComingSoonButtonClick(e);
                      } else {
                        handleButtonClick(location.buttonUrl);
                      }
                    }}
                  >
                    {location.buttonLabel}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
      
      {showModal && (
        <div className={styles['modal-overlay']}>
          <div className={styles['modal-content']}>
            <span className={styles['close']} onClick={handleCloseModal}>&times;</span>
            <p>Chờ cập nhật</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default JumpPage;
