import { useEffect } from 'react';
import { RootState, useAppDispatch } from '../../shared/utils/hooks/reduxHooks';
import { getUserProfile } from '../../entities/UserProfile/model/userProfileService/getUserProfile';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './ProfilePage.css';
import MailIcon from '../../shared/ui/MailIcon/MailIcon';
import Logout from '../../features/logout/Logout';
import { Button } from '../../shared/ui';
import { ButtonStyle } from '../../shared/ui/Button/Button';

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const param = useParams();

  const onGoToPreviousPage = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(getUserProfile(Number(param.id)));
  }, [dispatch, param.id]);
  const data = useSelector((state: RootState) => state.userProfile.userProfile);

  return (
    <div className="profile">
      <div className="profile__header">
        <div className="profile__header-wrapper">
          <Button
            handleClick={onGoToPreviousPage}
            className="profile__header-back-btn"
            outline={ButtonStyle.white}
          >
            Назад
          </Button>
          <div className="avatar-avatar-wrapper">
            <img
              className="profile__avatar"
              src={data.avatar}
              alt={data.first_name}
            />
          </div>

          <div className="profile__header-text-wrapper">
            <h1 className="profile__header-title">{`${data.first_name}  ${data.last_name}`}</h1>
            <p className="profile__header__text">Партнер</p>
          </div>
          <Logout className="profile__header-logout" />
        </div>
      </div>
      <div className="profile__main-info-wrapper">
        <div className="profile__main-info">
          <p>
            Клиенты видят в нем эксперта по вопросам разработки комплексных
            решений финансовых продуктов, включая такие аспекты, как
            организационная структура, процессы, аналитика и ИТ-компоненты. Он
            помогает клиентам лучше понимать структуру рисков их бизнеса,
            улучшать процессы за счет применения новейших технологий и
            увеличивать продажи, используя самые современные аналитические
            инструменты.
          </p>
          <p>
            В работе с клиентами недостаточно просто решить конкретную проблему
            или помочь справиться с трудностями. Не менее важно уделять внимание
            обмену знаниями: "Один из самых позитивных моментов — это осознание
            того, что ты помог клиенту перейти на совершенно новый уровень
            компетентности, уверенность в том, что после окончания проекта у
            клиента есть все необходимое, чтобы дальше развиваться
            самостоятельно".
          </p>
        </div>
        <div className="profile__contacts">
          <a className="profile__email" href={`mailto: ${data.email}`}>
            <MailIcon />
            <span>{data.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
