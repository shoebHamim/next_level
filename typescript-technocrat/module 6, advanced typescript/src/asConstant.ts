
// If we don't want to use enum, we can achieve same objective with readyOnly Type
type TUserRoles={
  readonly Admin:string,
  readonly Editor:string,
  readonly Viewer:string,

}

const UserRoles:TUserRoles={
  Admin:'ADMIN',
  Editor: 'EDITOR',
  Viewer:'VIEWER'
}

// UserRoles.Admin='lame people'
console.log(UserRoles.Admin);
// but as these Admin/Editor are fixed and won't change, we can avoid using type 
// declaration and use them like this
const UserRoles1={
  Admin:'ADMIN',
  Editor: 'EDITOR',
  Viewer:'VIEWER'
} as const;

const getRules=(role: keyof TUserRoles)=>{
    return UserRoles1[role]
}
// typeof and keyof together
const getRules2=(role: keyof typeof UserRoles)=>{
    return UserRoles1[role]
}

//! typeof return the type like this👇
/* 
{
Admin:string,
Editor:string,
Viewer:string
}
 */
//! keyof returns this👇
// Admin|Editor|Viewer



export {}