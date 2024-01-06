test_str = "1x^3-5x-7"
x=1
test_str = test_str.replace("^","**")
print(f"the string is {test_str}")
cond = True
x = -10
a =0
b=0

while cond:
    x += 1
    new_str = test_str.replace("x","*"+str(x))
    sum1 = eval(new_str)
    if sum1 >=0 :
        b = x
        a = x-1
        cond=False
print(f"a and b values are {a,b}")