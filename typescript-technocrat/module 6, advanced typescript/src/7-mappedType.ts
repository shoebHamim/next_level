// Mapped types: create new types by transforming properties of an existing type.
// They iterate over keys to create new property types.
type User = {
  name: string;
  age: number;
  email: string;
};


// Make all properties optional
type PartialUser = {
  [K in keyof User]?: User[K];
};

type Partial<T>={
  [K in keyof T]?:T[K]
}

type PartialUser2=Partial<User>


export{}








