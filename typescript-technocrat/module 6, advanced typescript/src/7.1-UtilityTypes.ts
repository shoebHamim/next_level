// 1. PARTIAL<T>

interface User{
  id:number;
  name:string;
  rating:string

}

type partialUser=Partial<User>
// 2. REQUIRED<T>

// 3. READONLY<T>
// 4. RECORD<K, T>
type Roles = "admin" | "user" | "guest";
type RolePermissions = Record<Roles, string[]>;

// 5. PICK<T, K>

type UserPreview=Pick<User,"id"|"rating">


// 6. OMIT<T, K>
type UserWithoutRating=Omit<User,"rating">















export{}