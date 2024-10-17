import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import LogoutButton from '@/components/common/header/logout-button';
import User from '@/components/common/header/user';

type Props = {};
const Header = (props: Props) => {
    return (
        <>
            <div className="header">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="header__menu">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuLink>Отели</NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink>Группы</NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink>Offline-заказ</NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Транспорт</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <NavigationMenuLink>Link</NavigationMenuLink>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Другие услуги</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <NavigationMenuLink>Link</NavigationMenuLink>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <div className="header__auth flex justify-between gap-4">
                        <User/>
                        <LogoutButton/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
