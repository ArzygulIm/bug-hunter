def is_uppercase(inp):
    return inp==inp.upper()

# Other solution
is_uppercase = lambda i: i == i.upper()

def is_uppercase(inp):
    return inp.isupper()

print(is_uppercase("HELLO"))  # True
print(is_uppercase("Hello"))  # False