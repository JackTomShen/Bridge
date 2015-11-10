using Bridge;

namespace System
{
    // A Version object contains four hierarchical numeric components: major, minor,
    // build and revision.  Build and revision may be unspecified, which is represented
    // internally as a -1.  By definition, an unspecified component matches anything
    // (both unspecified and specified), and an unspecified component is "less than" any
    // specified component.
    [Name("Bridge.Version")]
    public sealed class Version : ICloneable, IComparable<Version>, IEquatable<Version>
    {
        public Version(int major, int minor, int build, int revision)
        {
        }

        public Version(int major, int minor, int build)
        {
        }

        public Version(int major, int minor)
        {
        }

        public Version(String version)
        {
        }

        public Version()
        {
        }

        // Properties for setting and getting version numbers
        public int Major
        {
            get
            {
                return 0;
            }
        }

        public int Minor
        {
            get
            {
                return 0;
            }
        }

        public int Build
        {
            get
            {
                return 0;
            }
        }

        public int Revision
        {
            get
            {
                return 0;
            }
        }

        public short MajorRevision
        {
            get
            {
                return 0;
            }
        }

        public short MinorRevision
        {
            get
            {
                return 0;
            }
        }

        public Object Clone()
        {
            return null;
        }

        public int CompareTo(Object version)
        {
            return 0;
        }

        public int CompareTo(Version value)
        {
            return 0;
        }

        public override bool Equals(Object obj)
        {
            return true;
        }

        public bool Equals(Version obj)
        {
            return true;
        }

        public override int GetHashCode()
        {
            return 0;
        }

        public override String ToString()
        {
            return null;
        }

        public String ToString(int fieldCount)
        {
            return null;
        }

        public static Version Parse(string input)
        {
            return null;
        }

        public static bool TryParse(string input, out Version result)
        {
            result = null;
            return false;
        }

        public static bool operator ==(Version v1, Version v2)
        {
            return false;
        }

        public static bool operator !=(Version v1, Version v2)
        {
            return false;
        }

        public static bool operator <(Version v1, Version v2)
        {
            return false;
        }

        public static bool operator <=(Version v1, Version v2)
        {
            return false;
        }

        public static bool operator >(Version v1, Version v2)
        {
            return false;
        }

        public static bool operator >=(Version v1, Version v2)
        {
            return false;
        }
    }
}
