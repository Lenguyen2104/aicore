import { useState, useCallback } from 'react';
import { mainNavItems, featuresNavData, resourcesNavData } from '../models';
import type { NavItem, NavCategory, NavSubItem } from '../models';

interface NavigationState {
  isMenuOpen: boolean;
  activeDropdown: string | null;
  isScrolled: boolean;
}

interface NavigationController {
  state: NavigationState;
  navItems: NavItem[];
  featuresData: NavCategory[];
  resourcesData: NavSubItem[];
  toggleMenu: () => void;
  closeMenu: () => void;
  openDropdown: (id: string) => void;
  closeDropdown: () => void;
  setScrolled: (value: boolean) => void;
}

export const useNavigationController = (): NavigationController => {
  const [state, setState] = useState<NavigationState>({
    isMenuOpen: false,
    activeDropdown: null,
    isScrolled: false,
  });

  const toggleMenu = useCallback(() => {
    setState(prev => ({ ...prev, isMenuOpen: !prev.isMenuOpen }));
  }, []);

  const closeMenu = useCallback(() => {
    setState(prev => ({ ...prev, isMenuOpen: false }));
  }, []);

  const openDropdown = useCallback((id: string) => {
    setState(prev => ({ ...prev, activeDropdown: id }));
  }, []);

  const closeDropdown = useCallback(() => {
    setState(prev => ({ ...prev, activeDropdown: null }));
  }, []);

  const setScrolled = useCallback((value: boolean) => {
    setState(prev => ({ ...prev, isScrolled: value }));
  }, []);

  return {
    state,
    navItems: mainNavItems,
    featuresData: featuresNavData,
    resourcesData: resourcesNavData,
    toggleMenu,
    closeMenu,
    openDropdown,
    closeDropdown,
    setScrolled,
  };
};
