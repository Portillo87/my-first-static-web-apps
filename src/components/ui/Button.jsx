/*src/components/ui/*/
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  icon = null,
  fullWidth = false,
  className = '',
  ...props 
}) => {
  
  const baseStyles = `
    inline-flex items-center justify-center gap-2 
    font-semibold rounded-lg transition-all duration-200 
    disabled:opacity-50 disabled:cursor-not-allowed
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `;
  
  const variants = {
    primary: `
      bg-gradient-to-r from-blue-600 to-purple-600 
      text-white hover:from-blue-700 hover:to-purple-700 
      shadow-lg hover:shadow-xl
      focus:ring-blue-500
    `,
    secondary: `
      bg-gray-800 text-white 
      hover:bg-gray-900 
      shadow-md hover:shadow-lg
      focus:ring-gray-700
    `,
    accent: `
      bg-yellow-400 text-gray-900 
      hover:bg-yellow-500 
      shadow-md hover:shadow-lg
      focus:ring-yellow-400
    `,
    outline: `
      border-2 border-blue-600 text-blue-600 
      hover:bg-blue-50 bg-transparent
      focus:ring-blue-500
    `,
    ghost: `
      text-blue-600 hover:bg-blue-50 bg-transparent
      focus:ring-blue-500
    `
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button 
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${widthClass}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
      {...props}
    >
      {icon && <span className="text-xl">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;