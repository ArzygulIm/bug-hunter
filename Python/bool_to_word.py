def bool_to_word(boolean):
    return "Yes" if boolean == True else "No"

# Other solutions:
bool_to_word = {True: 'Yes', False: 'No'}.get

bool_to_word = lambda b: b and "Yes" or "No"

bool_to_word=lambda b:"YNeos"[1-b::2]

def bool_to_word(boolean):
    return 'Yes' if boolean else 'No'