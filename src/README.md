# EDCIC Source Code Structure

This document outlines the improved structure of the EDCIC React application.

## Directory Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components (route handlers)
├── context/            # React Context providers
├── hooks/              # Custom React hooks
├── constants/          # Application constants and configuration
├── utils/              # Utility functions
├── assets/             # Static assets (images, fonts, etc.)
├── styles/             # CSS/styling files
├── App.js              # Main application component
├── index.js            # Application entry point
└── index.css           # Global styles
```

## Key Improvements Made

### 1. **Centralized Constants**
- `constants/navigationLinks.js` - Navigation menu items
- `constants/index.js` - Centralized exports

### 2. **Custom Hooks**
- `hooks/useLocalStorage.js` - localStorage management
- `hooks/useWindowDimensions.js` - Responsive design helper
- `hooks/index.js` - Centralized exports

### 3. **Utility Functions**
- `utils/scrollUtils.js` - Scroll-related utilities
- `utils/index.js` - Centralized exports

### 4. **Improved Context**
- Enhanced `AppContext` with better state management
- Added custom hook `useAppContext` for type safety

### 5. **Code Organization**
- Consistent arrow function components
- Organized imports by category
- Removed duplicate routes in App.js
- Added proper component structure to placeholder components

## Usage Examples

### Using Constants
```javascript
import { NAVBAR_LINKS } from "../constants";
```

### Using Custom Hooks
```javascript
import { useLocalStorage, useWindowDimensions } from "../hooks";
```

### Using Utilities
```javascript
import { scrollToTop } from "../utils";
```

## Component Guidelines

1. Use arrow function components consistently
2. Organize imports by category (React, libraries, local)
3. Use proper prop destructuring
4. Add meaningful placeholder content for incomplete components
5. Follow consistent naming conventions

## Future Improvements

- Add TypeScript for better type safety
- Implement proper error boundaries
- Add unit tests for components and utilities
- Consider adding a state management library for complex state
- Add proper loading states and error handling 