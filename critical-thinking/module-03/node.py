

class Node:
  def __init__(self,value,next=None):
    self.value=value
    self.next=next

n1=Node(1)
n2=Node(2)

n1.next=n2

head=n1
tail=n2

head=head.next
# when only 1 element
head=head.next
tail=None

while head:
  print(head.value)
  head=head.next


print(head)
print(tail)