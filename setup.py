from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in hijri_date/__init__.py
from hijri_date import __version__ as version

setup(
	name="hijri_date",
	version=version,
	description="Islamic Hijri DatePicker",
	author="Ahmed Al-Farran",
	author_email="afarran1992@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
