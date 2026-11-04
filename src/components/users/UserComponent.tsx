// Імпортую тип FC з бібліотеки React.
// FC (FunctionComponent) використовую для типізації функціонального компонента.
import type { FC } from "react";

// Імпортую інтерфейс IUser, який описує структуру об'єкта користувача.
import type { IUser } from "../../model/IUser.ts";

// Створюю тип UserTypeProps, який описує властивості (props),
// що повинен отримати компонент UserComponent.
type UserTypeProps = {
    // user — об'єкт користувача типу IUser.
    // Містить інформацію про користувача: id, name, username, email та інші поля.
    user: IUser;
};

// Створюю функціональний компонент UserComponent де є
// FC — тип React для функціонального компонента.
// UserTypeProps — тип, який описує властивості, що компонент повинен отримати.
// FC<UserTypeProps> Разом вони повідомляють TypeScript, що компонент приймає user із типом IUser.
// За допомогою деструктуризації ({user}) Компонент отримує об'єкт props, а з нього дістає властивість user
const UserComponent: FC<UserTypeProps> = ({ user }) => {
    // Повертаю розмітку для відображення інформації про користувача.
    return (
        // Створюю div із класом user-card для оформлення картки користувача за допомогою CSS.
        <div className="user-card">
            {/* Виводжу ідентифікатор, ім'я та нікнейм користувача. */}
            {user.id} : {user.name} {user.username}

        </div>
    );
};
// Експортую компонент, щоб використовувати його в інших файлах.
export default UserComponent;
