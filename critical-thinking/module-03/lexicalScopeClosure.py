
outer_val=100

def outer_fn():
  outer='i am outer bruh'
  outer_val=0
  def inner_fn():
    inner='i am inner'
    global outer_val
    outer_val+=1
    # In Python, when you assign to a variable inside a function 
    # (outer_val += 1), Python assumes it's a local variable by default. 
    # but this assumed local value doesn't have any value, 
    # how can we increment, that's the error
    # ! solution
    # Python Scope Keywords
# nonlocal - modifies variables in the nearest enclosing scope (but not global)
# global - modifies variables in the global scope
    print(outer)
    print(inner)
    print('i am outer val',outer_val)
  return inner_fn

result=outer_fn()
result()
result()
# print(result)
  