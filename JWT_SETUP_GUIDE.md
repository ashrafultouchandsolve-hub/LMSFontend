# JWT Authentication Frontend Implementation Guide

## সেটআপ সম্পূর্ণ হয়েছে! 🎉

আপনার Angular frontend এ JWT Authentication সম্পূর্ণভাবে implement হয়েছে। এখানে কি কি তৈরি হয়েছে তা দেখুন:

---

## 📁 তৈরি করা Services

### 1. **JwtService** (`src/app/Service/jwt.service.ts`)
Token এবং user information localStorage এ store করে।

**পদ্ধতি:**
- `setToken(token)` - Token save করুন
- `getToken()` - Token পান
- `hasToken()` - Token আছে কিনা check করুন
- `removeToken()` - Token delete করুন
- `setUser(user)` - User info save করুন
- `getUser()` - User info পান
- `decodeToken()` - Token decode করে payload দেখুন
- `isTokenExpired()` - Token expire হয়েছে কিনা check করুন
- `clear()` - সব data clear করুন (logout এর সময়)

### 2. **AuthService** (`src/app/Service/auth.service.ts`)
Authentication logic handle করে এবং state manage করে।

**কী বৈশিষ্ট্য:**
- `login(email, password)` - Login করুন
- `register(fullName, email, password, role)` - Register করুন
- `logout()` - Logout করুন
- `isLoggedIn()` - Logged in আছেন কিনা check করুন
- `getCurrentUser()` - Current user info পান
- `getToken()` - Token পান
- Observable streams: `isLoggedIn$` এবং `currentUser$`

### 3. **JwtInterceptor** (`src/app/Service/jwt.interceptor.ts`)
সব HTTP requests এ automatically token attach করে।

---

## 🔐 Route Protection

**Updated in `src/app/app.routes.ts`**

```typescript
{path: 'homepage', component: HomePage, canActivate: [authGuard]}
```

- `authGuard` দিয়ে protected routes রক্ষা করা হয়েছে
- যদি token নেই, তাহলে login page এ redirect হবে

---

## 📝 আপডেট করা Components

### Login Component (`src/app/auth/login/login.ts`)
- `Service` এর বদলে `AuthService` ব্যবহার করছে
- Token automatically saved হয় AuthService দিয়ে
- localStorage manual handling এর প্রয়োজন নেই

### Register Component (`src/app/auth/register/register.ts`)
- `Service` এর বদলে `AuthService` ব্যবহার করছে
- Registration এর পর automatically logged in হয়
- Token saved এবং user redirected হয় dashboard এ

### Home Page Component (`src/app/base/home-page/home-page.ts`)
- `AuthService` দিয়ে user info দেখায়
- Logout button properly কাজ করে
- Real-time auth state updates পায়

---

## 🔄 Data Flow

```
1. LOGIN/REGISTER
   ├─► AuthService.login() / AuthService.register()
   ├─► Backend থেকে token + user info পায়
   ├─► JwtService দিয়ে token এবং user save করে
   ├─► isLoggedIn$ এবং currentUser$ এ notify করে
   └─► Component এ Redirect হয়

2. REQUEST করার সময়
   ├─► JwtInterceptor automatic token attach করে
   ├─► Header: Authorization: Bearer <token>
   └─► Backend receive করে এবং validate করে

3. LOGOUT
   ├─► AuthService.logout() call করে
   ├─► Token এবং user info clear করে
   └─► Login page এ redirect করে
```

---

## 💾 localStorage এ Store করা Data

```json
{
  "auth_token": "eyJhbGciOiJIUzI1NiIs...",
  "auth_user": {
    "id": 1,
    "email": "user@example.com",
    "fullName": "John Doe",
    "role": 1
  }
}
```

---

## 🚀 কিভাবে ব্যবহার করবেন

### Login এ:
```typescript
this.authService.login(email, password).subscribe({
  next: (response) => {
    // Token automatically saved
    // User redirected to dashboard
  }
});
```

### Protected Routes এ:
```typescript
// In routes
{
  path: 'dashboard',
  component: DashboardComponent,
  canActivate: [authGuard]
}
```

### User Info পেতে:
```typescript
this.authService.currentUser$.subscribe((user) => {
  console.log(user); // { id, email, fullName, role }
});

// অথবা directly
const user = this.authService.getCurrentUser();
```

### Logout করতে:
```typescript
this.authService.logout().then(() => {
  this.router.navigateByUrl('/login');
});
```

---

## ⚙️ Configuration

### Backend URL Update করুন (যদি প্রয়োজন হয়)
File: `src/app/Service/service.ts`

```typescript
private readonly loginUrl = 'https://localhost:7236/api/Register/Login';
private readonly registerUrl = 'https://localhost:7236/api/Register/Register';
```

---

## ✅ Testing করুন

1. **Register করুন** - নতুন account তৈরি করুন
2. **Login করুন** - Email এবং password দিয়ে login করুন
3. **Token Check করুন** - Browser console এ:
   ```javascript
   localStorage.getItem('auth_token')
   ```
4. **Logout করুন** - Token clear হবে
5. **Protected Route Test করুন** - Logout এর পর homepage access করলে login page এ redirect হবে

---

## 🔑 Key Features

✅ Automatic token management
✅ User state management
✅ Route protection with guards
✅ Token expiration checking
✅ Automatic bearer token injection in requests
✅ Logout functionality
✅ User info storage and retrieval
✅ Observable-based state management

---

## 📌 Next Steps (Optional)

1. **Refresh Token** implement করতে পারেন
2. **Token Expiration Dialog** দেখাতে পারেন
3. **Social Login** integrate করতে পারেন
4. **Role-based Access Control** add করতে পারেন

---

Made with ❤️ for your Learning Platform
