"""this will allow me to subtract lists from each other"""
from my_python_projects.list_sub_error_handling import listSubError


class list_subtract():

    def __init__(self, user_list):
        self.u_list = user_list

    def __sub__(self, other):

        if len(self.u_list) < len(other.u_list):
            raise listSubError("You cannot subtract a longer list from a smaller list")
        return [i for i in self.u_list if i not in other.u_list]


def main():
    a = list_subtract(list(input("enter the first list of strings separated by ,").split(',')))
    b = list_subtract(list(input("enter the second list of strings to be subtracted from the first, separated by ,")
                           .split(',')))
    try:
        print(a - b)
    except listSubError as e:
        print(e.args)


if __name__ == '__main__':
    main()
