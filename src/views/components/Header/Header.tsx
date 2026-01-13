import React, { useEffect } from 'react';
import { Menu, X, Plus, ChevronRight, GraduationCap, FileText, Video, BookOpen, LifeBuoy, LucideIcon } from 'lucide-react';
import { useNavigationController } from '../../../controllers';
import './Header.scss';

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  FileText,
  Video,
  BookOpen,
  LifeBuoy,
};

export const Header: React.FC = () => {
  const {
    state,
    navItems,
    featuresData,
    resourcesData,
    toggleMenu,
    closeMenu,
    openDropdown,
    closeDropdown,
    setScrolled,
  } = useNavigationController();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setScrolled]);

  return (
    <header className={`header ${state.isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        {/* Logo */}
        <a href="/" className="header__logo">
          <svg className="header__logo-icon" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="8" fill="url(#logo-gradient)" />
            <path d="M12 20L18 14L24 20L18 26L12 20Z" fill="white" />
            <path d="M20 16L26 10L32 16L26 22L20 16Z" fill="white" opacity="0.7" />
            <defs>
              <linearGradient id="logo-gradient" x1="0" y1="0" x2="40" y2="40">
                <stop stopColor="#6366f1" />
                <stop offset="1" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
          <span className="header__logo-text">everfit</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="header__nav">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="header__nav-item"
              onMouseEnter={() => !item.href && openDropdown(item.id)}
              onMouseLeave={closeDropdown}
            >
              {item.href ? (
                <a href={item.href} className="header__nav-link">
                  {item.label}
                </a>
              ) : (
                <button className="header__nav-link header__nav-link--dropdown">
                  {item.label}
                  <Plus className="header__nav-icon" />
                </button>
              )}

              {/* Features Dropdown */}
              {item.id === 'features' && state.activeDropdown === 'features' && (
                <div 
                  className="header__dropdown header__dropdown--features"
                  onMouseEnter={() => openDropdown('features')}
                  onMouseLeave={closeDropdown}
                >
                  <div className="header__dropdown-grid">
                    {featuresData.map((category) => (
                      <div key={category.title} className="header__dropdown-category">
                        {category.image && (
                          <div className="header__dropdown-image">
                            <img src={category.image} alt={category.title} />
                          </div>
                        )}
                        <h4 className="header__dropdown-title">{category.title}</h4>
                        <ul className="header__dropdown-list">
                          {category.items.map((subItem) => (
                            <li key={subItem.id}>
                              <a href={subItem.href} className="header__dropdown-link">
                                <span className="header__dropdown-link-label">{subItem.label}</span>
                                <ChevronRight className="header__dropdown-link-arrow" />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Resources Dropdown */}
              {item.id === 'resources' && state.activeDropdown === 'resources' && (
                <div
                  className="header__dropdown header__dropdown--resources"
                  onMouseEnter={() => openDropdown('resources')}
                  onMouseLeave={closeDropdown}
                >
                  <ul className="header__dropdown-list">
                    {resourcesData.map((subItem) => {
                      const IconComponent = subItem.icon ? iconMap[subItem.icon] : null;
                      return (
                        <li key={subItem.id}>
                          <a href={subItem.href} className="header__dropdown-link">
                            {IconComponent && <IconComponent className="header__dropdown-link-icon" />}
                            <span>{subItem.label}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="header__actions">
          <a href="/signin" className="header__signin">Sign In</a>
          <a href="/trial" className="header__cta">Start free trial</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="header__menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {state.isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`header__mobile-menu ${state.isMenuOpen ? 'header__mobile-menu--open' : ''}`}>
        <nav className="header__mobile-nav">
          {navItems.map((item) => (
            <div key={item.id} className="header__mobile-nav-item">
              {item.href ? (
                <a href={item.href} className="header__mobile-nav-link" onClick={closeMenu}>
                  {item.label}
                </a>
              ) : (
                <button
                  className="header__mobile-nav-link"
                  onClick={() => openDropdown(state.activeDropdown === item.id ? '' : item.id)}
                >
                  {item.label}
                  <Plus className={`header__mobile-nav-icon ${state.activeDropdown === item.id ? 'rotated' : ''}`} />
                </button>
              )}

              {/* Mobile Features Submenu */}
              {item.id === 'features' && state.activeDropdown === 'features' && (
                <div className="header__mobile-submenu">
                  {featuresData.map((category) => (
                    <div key={category.title} className="header__mobile-category">
                      <h4>{category.title}</h4>
                      {category.items.map((subItem) => (
                        <a
                          key={subItem.id}
                          href={subItem.href}
                          className="header__mobile-submenu-link"
                          onClick={closeMenu}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {/* Mobile Resources Submenu */}
              {item.id === 'resources' && state.activeDropdown === 'resources' && (
                <div className="header__mobile-submenu">
                  {resourcesData.map((subItem) => (
                    <a
                      key={subItem.id}
                      href={subItem.href}
                      className="header__mobile-submenu-link"
                      onClick={closeMenu}
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="header__mobile-actions">
          <a href="/signin" className="header__mobile-signin">Sign In</a>
          <a href="/trial" className="header__mobile-cta">Start free trial</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
