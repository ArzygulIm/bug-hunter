def square_sum(numbers):
    sum=0
    for i in numbers:
        sum+=i**2
    return sum

print(square_sum([1, 2, 3]))  # Output: 14

#other solutions
def square_sum(numbers):
    return sum(x ** 2 for x in numbers)

square_sum = lambda n: sum(e**2 for e in n)