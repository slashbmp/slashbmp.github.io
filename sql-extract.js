const _fs = require("fs");
const restrict = `ACCESSIBLE (R)

ACCOUNT

ACTION

ACTIVE; added in 8.0.14 (nonreserved)

ADD (R)

ADMIN; became nonreserved in 8.0.12

AFTER

AGAINST

AGGREGATE

ALGORITHM

ALL (R)

ALTER (R)

ALWAYS

ANALYSE; removed in 8.0.1

ANALYZE (R)

AND (R)

ANY

ARRAY; added in 8.0.17 (reserved); became nonreserved in 8.0.19

AS (R)

ASC (R)

ASCII

ASENSITIVE (R)

AT

ATTRIBUTE; added in 8.0.21 (nonreserved)

AUTHENTICATION; added in 8.0.27 (nonreserved)

AUTOEXTEND_SIZE

AUTO_INCREMENT

AVG

AVG_ROW_LENGTH

B

BACKUP

BEFORE (R)

BEGIN

BETWEEN (R)

BIGINT (R)

BINARY (R)

BINLOG

BIT

BLOB (R)

BLOCK

BOOL

BOOLEAN

BOTH (R)

BTREE

BUCKETS; added in 8.0.2 (nonreserved)

BULK; added in 8.0.32 (nonreserved)

BY (R)

BYTE

C

CACHE

CALL (R)

CASCADE (R)

CASCADED

CASE (R)

CATALOG_NAME

CHAIN

CHALLENGE_RESPONSE; added in 8.0.27 (nonreserved)

CHANGE (R)

CHANGED

CHANNEL

CHAR (R)

CHARACTER (R)

CHARSET

CHECK (R)

CHECKSUM

CIPHER

CLASS_ORIGIN

CLIENT

CLONE; added in 8.0.3 (nonreserved)

CLOSE

COALESCE

CODE

COLLATE (R)

COLLATION

COLUMN (R)

COLUMNS

COLUMN_FORMAT

COLUMN_NAME

COMMENT

COMMIT

COMMITTED

COMPACT

COMPLETION

COMPONENT

COMPRESSED

COMPRESSION

CONCURRENT

CONDITION (R)

CONNECTION

CONSISTENT

CONSTRAINT (R)

CONSTRAINT_CATALOG

CONSTRAINT_NAME

CONSTRAINT_SCHEMA

CONTAINS

CONTEXT

CONTINUE (R)

CONVERT (R)

CPU

CREATE (R)

CROSS (R)

CUBE (R); became reserved in 8.0.1

CUME_DIST (R); added in 8.0.2 (reserved)

CURRENT

CURRENT_DATE (R)

CURRENT_TIME (R)

CURRENT_TIMESTAMP (R)

CURRENT_USER (R)

CURSOR (R)

CURSOR_NAME

D

DATA

DATABASE (R)

DATABASES (R)

DATAFILE

DATE

DATETIME

DAY

DAY_HOUR (R)

DAY_MICROSECOND (R)

DAY_MINUTE (R)

DAY_SECOND (R)

DEALLOCATE

DEC (R)

DECIMAL (R)

DECLARE (R)

DEFAULT (R)

DEFAULT_AUTH

DEFINER

DEFINITION; added in 8.0.4 (nonreserved)

DELAYED (R)

DELAY_KEY_WRITE

DELETE (R)

DENSE_RANK (R); added in 8.0.2 (reserved)

DESC (R)

DESCRIBE (R)

DESCRIPTION; added in 8.0.4 (nonreserved)

DES_KEY_FILE; removed in 8.0.3

DETERMINISTIC (R)

DIAGNOSTICS

DIRECTORY

DISABLE

DISCARD

DISK

DISTINCT (R)

DISTINCTROW (R)

DIV (R)

DO

DOUBLE (R)

DROP (R)

DUAL (R)

DUMPFILE

DUPLICATE

DYNAMIC

E

EACH (R)

ELSE (R)

ELSEIF (R)

EMPTY (R); added in 8.0.4 (reserved)

ENABLE

ENCLOSED (R)

ENCRYPTION

END

ENDS

ENFORCED; added in 8.0.16 (nonreserved)

ENGINE

ENGINES

ENGINE_ATTRIBUTE; added in 8.0.21 (nonreserved)

ENUM

ERROR

ERRORS

ESCAPE

ESCAPED (R)

EVENT

EVENTS

EVERY

EXCEPT (R)

EXCHANGE

EXCLUDE; added in 8.0.2 (nonreserved)

EXECUTE

EXISTS (R)

EXIT (R)

EXPANSION

EXPIRE

EXPLAIN (R)

EXPORT

EXTENDED

EXTENT_SIZE

F

FACTOR; added in 8.0.27 (nonreserved)

FAILED_LOGIN_ATTEMPTS; added in 8.0.19 (nonreserved)

FALSE (R)

FAST

FAULTS

FETCH (R)

FIELDS

FILE

FILE_BLOCK_SIZE

FILTER

FINISH; added in 8.0.27 (nonreserved)

FIRST

FIRST_VALUE (R); added in 8.0.2 (reserved)

FIXED

FLOAT (R)

FLOAT4 (R)

FLOAT8 (R)

FLUSH

FOLLOWING; added in 8.0.2 (nonreserved)

FOLLOWS

FOR (R)

FORCE (R)

FOREIGN (R)

FORMAT

FOUND

FROM (R)

FULL

FULLTEXT (R)

FUNCTION (R); became reserved in 8.0.1

G

GENERAL

GENERATE; added in 8.0.32 (nonreserved)

GENERATED (R)

GEOMCOLLECTION; added in 8.0.11 (nonreserved)

GEOMETRY

GEOMETRYCOLLECTION

GET (R)

GET_FORMAT

GET_MASTER_PUBLIC_KEY; added in 8.0.4 (reserved); became nonreserved in 8.0.11

GET_SOURCE_PUBLIC_KEY; added in 8.0.23 (nonreserved)

GLOBAL

GRANT (R)

GRANTS

GROUP (R)

GROUPING (R); added in 8.0.1 (reserved)

GROUPS (R); added in 8.0.2 (reserved)

GROUP_REPLICATION

GTID_ONLY; added in 8.0.27 (nonreserved)

H

HANDLER

HASH

HAVING (R)

HELP

HIGH_PRIORITY (R)

HISTOGRAM; added in 8.0.2 (nonreserved)

HISTORY; added in 8.0.3 (nonreserved)

HOST

HOSTS

HOUR

HOUR_MICROSECOND (R)

HOUR_MINUTE (R)

HOUR_SECOND (R)

I

IDENTIFIED

IF (R)

IGNORE (R)

IGNORE_SERVER_IDS

IMPORT

IN (R)

INACTIVE; added in 8.0.14 (nonreserved)

INDEX (R)

INDEXES

INFILE (R)

INITIAL; added in 8.0.27 (nonreserved)

INITIAL_SIZE

INITIATE; added in 8.0.27 (nonreserved)

INNER (R)

INOUT (R)

INSENSITIVE (R)

INSERT (R)

INSERT_METHOD

INSTALL

INSTANCE

INT (R)

INT1 (R)

INT2 (R)

INT3 (R)

INT4 (R)

INT8 (R)

INTEGER (R)

INTERSECT (R); added in 8.0.31 (reserved)

INTERVAL (R)

INTO (R)

INVISIBLE

INVOKER

IO

IO_AFTER_GTIDS (R)

IO_BEFORE_GTIDS (R)

IO_THREAD

IPC

IS (R)

ISOLATION

ISSUER

ITERATE (R)

J

JOIN (R)

JSON

JSON_TABLE (R); added in 8.0.4 (reserved)

JSON_VALUE; added in 8.0.21 (nonreserved)

K

KEY (R)

KEYRING; added in 8.0.24 (nonreserved)

KEYS (R)

KEY_BLOCK_SIZE

KILL (R)

L

LAG (R); added in 8.0.2 (reserved)

LANGUAGE

LAST

LAST_VALUE (R); added in 8.0.2 (reserved)

LATERAL (R); added in 8.0.14 (reserved)

LEAD (R); added in 8.0.2 (reserved)

LEADING (R)

LEAVE (R)

LEAVES

LEFT (R)

LESS

LEVEL

LIKE (R)

LIMIT (R)

LINEAR (R)

LINES (R)

LINESTRING

LIST

LOAD (R)

LOCAL

LOCALTIME (R)

LOCALTIMESTAMP (R)

LOCK (R)

LOCKED; added in 8.0.1 (nonreserved)

LOCKS

LOGFILE

LOGS

LONG (R)

LONGBLOB (R)

LONGTEXT (R)

LOOP (R)

LOW_PRIORITY (R)

M

MASTER

MASTER_AUTO_POSITION

MASTER_BIND (R)

MASTER_COMPRESSION_ALGORITHMS; added in 8.0.18 (nonreserved)

MASTER_CONNECT_RETRY

MASTER_DELAY

MASTER_HEARTBEAT_PERIOD

MASTER_HOST

MASTER_LOG_FILE

MASTER_LOG_POS

MASTER_PASSWORD

MASTER_PORT

MASTER_PUBLIC_KEY_PATH; added in 8.0.4 (nonreserved)

MASTER_RETRY_COUNT

MASTER_SERVER_ID; removed in 8.0.23

MASTER_SSL

MASTER_SSL_CA

MASTER_SSL_CAPATH

MASTER_SSL_CERT

MASTER_SSL_CIPHER

MASTER_SSL_CRL

MASTER_SSL_CRLPATH

MASTER_SSL_KEY

MASTER_SSL_VERIFY_SERVER_CERT (R)

MASTER_TLS_CIPHERSUITES; added in 8.0.19 (nonreserved)

MASTER_TLS_VERSION

MASTER_USER

MASTER_ZSTD_COMPRESSION_LEVEL; added in 8.0.18 (nonreserved)

MATCH (R)

MAXVALUE (R)

MAX_CONNECTIONS_PER_HOUR

MAX_QUERIES_PER_HOUR

MAX_ROWS

MAX_SIZE

MAX_UPDATES_PER_HOUR

MAX_USER_CONNECTIONS

MEDIUM

MEDIUMBLOB (R)

MEDIUMINT (R)

MEDIUMTEXT (R)

MEMBER; added in 8.0.17 (reserved); became nonreserved in 8.0.19

MEMORY

MERGE

MESSAGE_TEXT

MICROSECOND

MIDDLEINT (R)

MIGRATE

MINUTE

MINUTE_MICROSECOND (R)

MINUTE_SECOND (R)

MIN_ROWS

MOD (R)

MODE

MODIFIES (R)

MODIFY

MONTH

MULTILINESTRING

MULTIPOINT

MULTIPOLYGON

MUTEX

MYSQL_ERRNO

N

NAME

NAMES

NATIONAL

NATURAL (R)

NCHAR

NDB

NDBCLUSTER

NESTED; added in 8.0.4 (nonreserved)

NETWORK_NAMESPACE; added in 8.0.16 (nonreserved)

NEVER

NEW

NEXT

NO

NODEGROUP

NONE

NOT (R)

NOWAIT; added in 8.0.1 (nonreserved)

NO_WAIT

NO_WRITE_TO_BINLOG (R)

NTH_VALUE (R); added in 8.0.2 (reserved)

NTILE (R); added in 8.0.2 (reserved)

NULL (R)

NULLS; added in 8.0.2 (nonreserved)

NUMBER

NUMERIC (R)

NVARCHAR

O

OF (R); added in 8.0.1 (reserved)

OFF; added in 8.0.20 (nonreserved)

OFFSET

OJ; added in 8.0.16 (nonreserved)

OLD; added in 8.0.14 (nonreserved)

ON (R)

ONE

ONLY

OPEN

OPTIMIZE (R)

OPTIMIZER_COSTS (R)

OPTION (R)

OPTIONAL; added in 8.0.13 (nonreserved)

OPTIONALLY (R)

OPTIONS

OR (R)

ORDER (R)

ORDINALITY; added in 8.0.4 (nonreserved)

ORGANIZATION; added in 8.0.4 (nonreserved)

OTHERS; added in 8.0.2 (nonreserved)

OUT (R)

OUTER (R)

OUTFILE (R)

OVER (R); added in 8.0.2 (reserved)

OWNER

P

PACK_KEYS

PAGE

PARSER

PARTIAL

PARTITION (R)

PARTITIONING

PARTITIONS

PASSWORD

PASSWORD_LOCK_TIME; added in 8.0.19 (nonreserved)

PATH; added in 8.0.4 (nonreserved)

PERCENT_RANK (R); added in 8.0.2 (reserved)

PERSIST; became nonreserved in 8.0.16

PERSIST_ONLY; added in 8.0.2 (reserved); became nonreserved in 8.0.16

PHASE

PLUGIN

PLUGINS

PLUGIN_DIR

POINT

POLYGON

PORT

PRECEDES

PRECEDING; added in 8.0.2 (nonreserved)

PRECISION (R)

PREPARE

PRESERVE

PREV

PRIMARY (R)

PRIVILEGES

PRIVILEGE_CHECKS_USER; added in 8.0.18 (nonreserved)

PROCEDURE (R)

PROCESS; added in 8.0.11 (nonreserved)

PROCESSLIST

PROFILE

PROFILES

PROXY

PURGE (R)

Q

QUARTER

QUERY

QUICK

R

RANDOM; added in 8.0.18 (nonreserved)

RANGE (R)

RANK (R); added in 8.0.2 (reserved)

READ (R)

READS (R)

READ_ONLY

READ_WRITE (R)

REAL (R)

REBUILD

RECOVER

RECURSIVE (R); added in 8.0.1 (reserved)

REDOFILE; removed in 8.0.3

REDO_BUFFER_SIZE

REDUNDANT

REFERENCE; added in 8.0.4 (nonreserved)

REFERENCES (R)

REGEXP (R)

REGISTRATION; added in 8.0.27 (nonreserved)

RELAY

RELAYLOG

RELAY_LOG_FILE

RELAY_LOG_POS

RELAY_THREAD

RELEASE (R)

RELOAD

REMOTE; added in 8.0.3 (nonreserved); removed in 8.0.14

REMOVE

RENAME (R)

REORGANIZE

REPAIR

REPEAT (R)

REPEATABLE

REPLACE (R)

REPLICA; added in 8.0.22 (nonreserved)

REPLICAS; added in 8.0.22 (nonreserved)

REPLICATE_DO_DB

REPLICATE_DO_TABLE

REPLICATE_IGNORE_DB

REPLICATE_IGNORE_TABLE

REPLICATE_REWRITE_DB

REPLICATE_WILD_DO_TABLE

REPLICATE_WILD_IGNORE_TABLE

REPLICATION

REQUIRE (R)

REQUIRE_ROW_FORMAT; added in 8.0.19 (nonreserved)

RESET

RESIGNAL (R)

RESOURCE; added in 8.0.3 (nonreserved)

RESPECT; added in 8.0.2 (nonreserved)

RESTART; added in 8.0.4 (nonreserved)

RESTORE

RESTRICT (R)

RESUME

RETAIN; added in 8.0.14 (nonreserved)

RETURN (R)

RETURNED_SQLSTATE

RETURNING; added in 8.0.21 (nonreserved)

RETURNS

REUSE; added in 8.0.3 (nonreserved)

REVERSE

REVOKE (R)

RIGHT (R)

RLIKE (R)

ROLE; became nonreserved in 8.0.1

ROLLBACK

ROLLUP

ROTATE

ROUTINE

ROW (R); became reserved in 8.0.2

ROWS (R); became reserved in 8.0.2

ROW_COUNT

ROW_FORMAT

ROW_NUMBER (R); added in 8.0.2 (reserved)

RTREE

S

SAVEPOINT

SCHEDULE

SCHEMA (R)

SCHEMAS (R)

SCHEMA_NAME

SECOND

SECONDARY; added in 8.0.16 (nonreserved)

SECONDARY_ENGINE; added in 8.0.13 (nonreserved)

SECONDARY_ENGINE_ATTRIBUTE; added in 8.0.21 (nonreserved)

SECONDARY_LOAD; added in 8.0.13 (nonreserved)

SECONDARY_UNLOAD; added in 8.0.13 (nonreserved)

SECOND_MICROSECOND (R)

SECURITY

SELECT (R)

SENSITIVE (R)

SEPARATOR (R)

SERIAL

SERIALIZABLE

SERVER

SESSION

SET (R)

SHARE

SHOW (R)

SHUTDOWN

SIGNAL (R)

SIGNED

SIMPLE

SKIP; added in 8.0.1 (nonreserved)

SLAVE

SLOW

SMALLINT (R)

SNAPSHOT

SOCKET

SOME

SONAME

SOUNDS

SOURCE

SOURCE_AUTO_POSITION; added in 8.0.23 (nonreserved)

SOURCE_BIND; added in 8.0.23 (nonreserved)

SOURCE_COMPRESSION_ALGORITHMS; added in 8.0.23 (nonreserved)

SOURCE_CONNECT_RETRY; added in 8.0.23 (nonreserved)

SOURCE_DELAY; added in 8.0.23 (nonreserved)

SOURCE_HEARTBEAT_PERIOD; added in 8.0.23 (nonreserved)

SOURCE_HOST; added in 8.0.23 (nonreserved)

SOURCE_LOG_FILE; added in 8.0.23 (nonreserved)

SOURCE_LOG_POS; added in 8.0.23 (nonreserved)

SOURCE_PASSWORD; added in 8.0.23 (nonreserved)

SOURCE_PORT; added in 8.0.23 (nonreserved)

SOURCE_PUBLIC_KEY_PATH; added in 8.0.23 (nonreserved)

SOURCE_RETRY_COUNT; added in 8.0.23 (nonreserved)

SOURCE_SSL; added in 8.0.23 (nonreserved)

SOURCE_SSL_CA; added in 8.0.23 (nonreserved)

SOURCE_SSL_CAPATH; added in 8.0.23 (nonreserved)

SOURCE_SSL_CERT; added in 8.0.23 (nonreserved)

SOURCE_SSL_CIPHER; added in 8.0.23 (nonreserved)

SOURCE_SSL_CRL; added in 8.0.23 (nonreserved)

SOURCE_SSL_CRLPATH; added in 8.0.23 (nonreserved)

SOURCE_SSL_KEY; added in 8.0.23 (nonreserved)

SOURCE_SSL_VERIFY_SERVER_CERT; added in 8.0.23 (nonreserved)

SOURCE_TLS_CIPHERSUITES; added in 8.0.23 (nonreserved)

SOURCE_TLS_VERSION; added in 8.0.23 (nonreserved)

SOURCE_USER; added in 8.0.23 (nonreserved)

SOURCE_ZSTD_COMPRESSION_LEVEL; added in 8.0.23 (nonreserved)

SPATIAL (R)

SPECIFIC (R)

SQL (R)

SQLEXCEPTION (R)

SQLSTATE (R)

SQLWARNING (R)

SQL_AFTER_GTIDS

SQL_AFTER_MTS_GAPS

SQL_BEFORE_GTIDS

SQL_BIG_RESULT (R)

SQL_BUFFER_RESULT

SQL_CACHE; removed in 8.0.3

SQL_CALC_FOUND_ROWS (R)

SQL_NO_CACHE

SQL_SMALL_RESULT (R)

SQL_THREAD

SQL_TSI_DAY

SQL_TSI_HOUR

SQL_TSI_MINUTE

SQL_TSI_MONTH

SQL_TSI_QUARTER

SQL_TSI_SECOND

SQL_TSI_WEEK

SQL_TSI_YEAR

SRID; added in 8.0.3 (nonreserved)

SSL (R)

STACKED

START

STARTING (R)

STARTS

STATS_AUTO_RECALC

STATS_PERSISTENT

STATS_SAMPLE_PAGES

STATUS

STOP

STORAGE

STORED (R)

STRAIGHT_JOIN (R)

STREAM; added in 8.0.20 (nonreserved)

STRING

SUBCLASS_ORIGIN

SUBJECT

SUBPARTITION

SUBPARTITIONS

SUPER

SUSPEND

SWAPS

SWITCHES

SYSTEM (R); added in 8.0.3 (reserved)

T

TABLE (R)

TABLES

TABLESPACE

TABLE_CHECKSUM

TABLE_NAME

TEMPORARY

TEMPTABLE

TERMINATED (R)

TEXT

THAN

THEN (R)

THREAD_PRIORITY; added in 8.0.3 (nonreserved)

TIES; added in 8.0.2 (nonreserved)

TIME

TIMESTAMP

TIMESTAMPADD

TIMESTAMPDIFF

TINYBLOB (R)

TINYINT (R)

TINYTEXT (R)

TLS; added in 8.0.21 (nonreserved)

TO (R)

TRAILING (R)

TRANSACTION

TRIGGER (R)

TRIGGERS

TRUE (R)

TRUNCATE

TYPE

TYPES

U

UNBOUNDED; added in 8.0.2 (nonreserved)

UNCOMMITTED

UNDEFINED

UNDO (R)

UNDOFILE

UNDO_BUFFER_SIZE

UNICODE

UNINSTALL

UNION (R)

UNIQUE (R)

UNKNOWN

UNLOCK (R)

UNREGISTER; added in 8.0.27 (nonreserved)

UNSIGNED (R)

UNTIL

UPDATE (R)

UPGRADE

URL; added in 8.0.32 (nonreserved)

USAGE (R)

USE (R)

USER

USER_RESOURCES

USE_FRM

USING (R)

UTC_DATE (R)

UTC_TIME (R)

UTC_TIMESTAMP (R)

V

VALIDATION

VALUE

VALUES (R)

VARBINARY (R)

VARCHAR (R)

VARCHARACTER (R)

VARIABLES

VARYING (R)

VCPU; added in 8.0.3 (nonreserved)

VIEW

VIRTUAL (R)

VISIBLE

W

WAIT

WARNINGS

WEEK

WEIGHT_STRING

WHEN (R)

WHERE (R)

WHILE (R)

WINDOW (R); added in 8.0.2 (reserved)

WITH (R)

WITHOUT

WORK

WRAPPER

WRITE (R)

X

X509

XA

XID

XML

XOR (R)

Y

YEAR

YEAR_MONTH (R)

Z

ZEROFILL (R)

ZONE; added in 8.0.22 (nonreserved)
`;
const sql = "SELECT date,\n"
		+ "pawnNumber,\n"
		+ "pawnPrice,\n"
		+ "CAST(IFNULL((pawnPrice / pawnNumber),0) AS DECIMAL(12,2)) pawnPricePerNumber,\n"
		+ "totalPawnNumber,\n"
		+ "totalPawnPrice,\n"
		+ "CAST(IFNULL((totalPawnPrice / totalPawnNumber),0) AS DECIMAL(12,2)) totalPawnPricePerNumber,\n"
		+ "IFNULL(t2.redemptionNumber,0) redemptionNumber,\n"
		+ "IFNULL(t2.redemptionPrice,0) redemptionPrice,\n"
		+ "IFNULL(t2.perInterestNumber,0) perInterestNumber,\n"
		+ "IFNULL(t2.perInterestPrice,0) perInterestPrice,\n"
		+ "IFNULL(t2.interestIncome,0) interestIncome,\n"
		+ "CAST(IFNULL(((t2.interestIncome / (t2.redemptionPrice + t2.perInterestPrice)) * 100),0) AS DECIMAL(12,2)) percentagePawn,\n"
		+ "CAST(IFNULL(((propertyExpiredInMonth / (remainingPawnPrice + propertyExpiredInMonth)) * 100),0) AS DECIMAL(12,2)) propertyExpiredRate,\n"
		+ "cost,\n"
		+ "actualSellPrice,\n"
		+ "(actualSellPrice - cost) profitLoss,\n"
		+ "CAST(IFNULL((((actualSellPrice - cost) / cost) * 100),0) AS DECIMAL(12,2)) percentageExpired,\n"
		+ "IFNULL(remainingPropertyNumber,0) remainingPropertyNumber,\n"
		+ "IFNULL(remainingPropertyPrice,0) remainingPropertyPrice,\n"
		+ "remainingPawnNumber,\n"
		+ "remainingPawnPrice,\n"
		+ "CAST(IFNULL((remainingPawnPrice / remainingPawnNumber),0) AS DECIMAL(12,2)) remainingPawnPricePerNumber\n"
		+ "FROM(\n"
		+ "SELECT date_range.DATE_INITIAL myDate,\n"
		+ "CONCAT(DATE_FORMAT(date_range.DATE_INITIAL,'%m'),'/',SUBSTR((YEAR(DATE(date_range.DATE_INITIAL))+543),3)) date,\n"
		+ "SUM(CASE WHEN pt.TICKET_SUB_STATUS IS NULL AND pt.TICKET_STATUS <> 'CANCEL' AND pt.CREATE_DATE IS NOT NULL THEN 1 ELSE 0 END) pawnNumber,\n"
		+ "SUM(CASE WHEN pt.TICKET_SUB_STATUS IS NULL AND pt.TICKET_STATUS <> 'CANCEL' AND pt.CREATE_DATE IS NOT NULL THEN pt.TOTAL_PAWN_PRICE ELSE 0 END) pawnPrice,\n"
		+ "SUM(CASE WHEN pt.TICKET_STATUS <> 'CANCEL' AND pt.CREATE_DATE IS NOT NULL THEN 1 ELSE 0 END) totalPawnNumber,\n"
		+ "SUM(CASE WHEN pt.TICKET_STATUS <> 'CANCEL' AND pt.CREATE_DATE IS NOT NULL THEN pt.TOTAL_PAWN_PRICE ELSE 0 END) totalPawnPrice,\n"
		+ "IFNULL(\n"
		+ "(\n"
		+ "SELECT SUM(TOTAL_PAWN_PRICE)\n"
		+ "FROM m_pawn_ticket\n"
		+ "WHERE DATE_FORMAT(DATE(ACTUAL_APPOINTMENT_DATE),'%m-%y') = DATE_FORMAT(DATE(date_range.DATE_INITIAL),'%m-%y')\n"
		+ "AND TICKET_STATUS = 'EXPIRED'\n"
		+ "),0\n"
		+ ") propertyExpiredInMonth,\n"
		+ "(\n"
		+ "SELECT SUM(\n"
		+ "CASE WHEN TICKET_STATUS = 'ACTIVE'\n"
		+ "THEN 1\n"
		+ "WHEN (TICKET_STATUS = 'REDEMPTION_ADJUST' or TICKET_STATUS = 'REDEMPTION_RENEW' or TICKET_STATUS = 'REDEMPTION')\n"
		+ "AND (CASE\n"
		+ "WHEN LAST_DAY(date_range.DATE_INITIAL) = LAST_DAY(#{dateTo})\n"
		+ "THEN DATE(REDEMPTION_DATE) > DATE(#{dateTo})\n"
		+ "ELSE DATE(REDEMPTION_DATE) > LAST_DAY(date_range.DATE_INITIAL)\n"
		+ "END\n"
		+ ")\n"
		+ "THEN 1\n"
		+ "WHEN TICKET_STATUS = 'EXPIRED'\n"
		+ "AND (CASE\n"
		+ "WHEN LAST_DAY(date_range.DATE_INITIAL) = LAST_DAY(#{dateTo})\n"
		+ "THEN DATE(se.EXPIRED_DATE) > DATE(#{dateTo})\n"
		+ "ELSE DATE(se.EXPIRED_DATE) > LAST_DAY(date_range.DATE_INITIAL)\n"
		+ "END\n"
		+ ")\n"
		+ "THEN 1\n"
		+ "ELSE 0 END\n"
		+ ")\n"
		+ "FROM m_pawn_ticket ticket\n"
		+ "LEFT JOIN m_storage_expired se ON se.TAG_ID = ticket.TICKET_CODE\n"
		+ "WHERE (\n"
		+ "CASE\n"
		+ "WHEN LAST_DAY(date_range.DATE_INITIAL) = LAST_DAY(#{dateTo})\n"
		+ "THEN DATE(ticket.CREATE_DATE) <= DATE(#{dateTo})\n"
		+ "ELSE DATE(ticket.CREATE_DATE) <= LAST_DAY(date_range.DATE_INITIAL)\n"
		+ "END\n"
		+ ")\n"
		+ "AND CASE\n"
		+ "WHEN #{branchId} IS NOT NULL THEN ticket.BRANCH_ID = #{branchId} ELSE true \n"
		+ "END\n"
		+ ") remainingPawnNumber,\n"
		+ "(\n"
		+ "SELECT SUM(\n"
		+ "CASE\n"
		+ "WHEN TICKET_STATUS = 'ACTIVE'\n"
		+ "THEN TOTAL_PAWN_PRICE\n"
		+ "WHEN (TICKET_STATUS = 'REDEMPTION_ADJUST' or TICKET_STATUS = 'REDEMPTION_RENEW' or TICKET_STATUS = 'REDEMPTION')\n"
		+ "AND (\n"
		+ "CASE\n"
		+ "WHEN LAST_DAY(date_range.DATE_INITIAL) = LAST_DAY(#{dateTo})\n"
		+ "THEN DATE(REDEMPTION_DATE) > DATE(#{dateTo})\n"
		+ "ELSE DATE(REDEMPTION_DATE) > LAST_DAY(date_range.DATE_INITIAL)\n"
		+ "END\n"
		+ ")\n"
		+ "THEN TOTAL_PAWN_PRICE\n"
		+ "WHEN TICKET_STATUS = 'EXPIRED'\n"
		+ "AND (\n"
		+ "CASE\n"
		+ "WHEN LAST_DAY(date_range.DATE_INITIAL) = LAST_DAY(#{dateTo})\n"
		+ "THEN DATE(se.EXPIRED_DATE) > DATE(#{dateTo})\n"
		+ "ELSE DATE(se.EXPIRED_DATE) > LAST_DAY(date_range.DATE_INITIAL)\n"
		+ "END\n"
		+ ")\n"
		+ "THEN TOTAL_PAWN_PRICE\n"
		+ "ELSE 0\n"
		+ "END\n"
		+ ")\n"
		+ "FROM m_pawn_ticket ticket\n"
		+ "LEFT JOIN m_storage_expired se ON se.TAG_ID = ticket.TICKET_CODE\n"
		+ "WHERE (\n"
		+ "CASE\n"
		+ "WHEN LAST_DAY(date_range.DATE_INITIAL) = LAST_DAY(#{dateTo})\n"
		+ "THEN DATE(ticket.CREATE_DATE) <= DATE(#{dateTo})\n"
		+ "ELSE DATE(ticket.CREATE_DATE) <= LAST_DAY(date_range.DATE_INITIAL)\n"
		+ "END\n"
		+ ")\n"
		+ "AND CASE WHEN #{branchId} IS NOT NULL THEN ticket.BRANCH_ID = #{branchId} ELSE true END\n"
		+ ") remainingPawnPrice,\n"
		+ "IFNULL(\n"
		+ "(\n"
		+ "SELECT SUM(COST)\n"
		+ "FROM m_selling_item\n"
		+ "WHERE MONTH(SELL_DATE) = MONTH(date_range.DATE_INITIAL)\n"
		+ "AND YEAR(SELL_DATE) = YEAR(date_range.DATE_INITIAL)\n"
		+ "AND IS_DELETED IS FALSE\n"
		+ "AND CASE WHEN #{branchId} IS NOT NULL THEN BRANCH_CODE = #{branchCode} ELSE true END\n"
		+ "),0\n"
		+ ") cost,\n"
		+ "IFNULL(\n"
		+ "(\n"
		+ "SELECT SUM(ACTUAL_SELL_PRICE)\n"
		+ "FROM m_selling_item\n"
		+ "WHERE MONTH(SELL_DATE) = MONTH(date_range.DATE_INITIAL)\n"
		+ "AND YEAR(SELL_DATE) = YEAR(date_range.DATE_INITIAL)\n"
		+ "AND IS_DELETED IS FALSE\n"
		+ "AND CASE WHEN #{branchId} IS NOT NULL THEN BRANCH_CODE = #{branchCode} ELSE true END\n"
		+ "),0\n"
		+ ") actualSellPrice,\n"
		+ "(\n"
		+ "SELECT SUM(\n"
		+ "CASE\n"
		+ "WHEN LAST_DAY(date_range.DATE_INITIAL) = LAST_DAY(DATE(#{dateTo}))\n"
		+ "THEN CASE\n"
		+ "WHEN t.sellDate IS NULL\n"
		+ "OR DATE(t.sellDate) > DATE(#{dateTo})\n"
		+ "THEN 1\n"
		+ "ELSE 0\n"
		+ "END\n"
		+ "ELSE CASE\n"
		+ "WHEN (\n"
		+ "t.sellDate IS NULL\n"
		+ "OR DATE(t.sellDate) > LAST_DAY(date_range.DATE_INITIAL)\n"
		+ ") AND DATE(t.actualAppointment) <=  LAST_DAY(date_range.DATE_INITIAL)\n"
		+ "THEN 1\n"
		+ "ELSE 0\n"
		+ "END\n"
		+ "END\n"
		+ ")\n"
		+ "FROM (\n"
		+ "SELECT ticket.TICKET_CODE\n"
		+ ", MIN(sell.SELL_DATE) sellDate\n"
		+ ", DATE(ticket.ACTUAL_APPOINTMENT_DATE) actualAppointment\n"
		+ "FROM m_pawn_ticket ticket\n"
		+ "LEFT JOIN m_item_expired ie ON SUBSTR(ie.ITEM_CODE,1,CHAR_LENGTH(ie.ITEM_CODE)-3) = ticket.TICKET_CODE\n"
		+ "LEFT JOIN m_selling_item sell ON (sell.ITEM_CODE = ie.ITEM_CODE OR sell.ITEM_CODE = ie.MELT_CODE ) AND sell.IS_DELETED IS FALSE\n"
		+ "WHERE ticket.TICKET_STATUS = 'EXPIRED'\n"
		+ "AND CASE WHEN #{branchId} IS NOT NULL THEN ticket.BRANCH_ID = #{branchId} ELSE true END\n"
		+ "AND DATE(ticket.ACTUAL_APPOINTMENT_DATE) <= DATE(#{dateTo})\n"
		+ "GROUP BY ticket.TICKET_CODE\n"
		+ "ORDER BY MIN(sell.SELL_DATE)\n"
		+ ") t\n"
		+ ") remainingPropertyNumber,\n"
		+ "(\n"
		+ "SELECT SUM(\n"
		+ "CASE\n"
		+ "WHEN LAST_DAY(date_range.DATE_INITIAL) = LAST_DAY(DATE(#{dateTo}))\n"
		+ "THEN\n"
		+ "CASE\n"
		+ "WHEN sell.SELL_DATE IS NULL OR DATE(sell.SELL_DATE) > DATE(#{dateTo})\n"
		+ "THEN ie.ITEM_PRICE\n"
		+ "ELSE 0\n"
		+ "END\n"
		+ "ELSE\n"
		+ "CASE\n"
		+ "WHEN sell.SELL_DATE IS NULL OR DATE(sell.SELL_DATE) > LAST_DAY(date_range.DATE_INITIAL)\n"
		+ "THEN ie.ITEM_PRICE\n"
		+ "ELSE 0\n"
		+ "END\n"
		+ "END\n"
		+ ")\n"
		+ "FROM m_item_expired ie\n"
		+ "LEFT JOIN m_selling_item sell ON (sell.ITEM_CODE = ie.ITEM_CODE OR sell.ITEM_CODE = ie.MELT_CODE ) AND sell.IS_DELETED IS FALSE\n"
		+ "WHERE CASE WHEN #{branchId} IS NOT NULL THEN ie.BRANCH_CODE = #{branchCode} ELSE true END\n"
		+ "AND DATE(ie.EXPIRED_DATE) <= LAST_DAY(date_range.DATE_INITIAL)\n"
		+ ") remainingPropertyPrice\n"
		+ "FROM (\n"
		+ "SELECT temp.DATE_INITIAL\n"
		+ "FROM (SELECT DATE(#{dateTo}) - INTERVAL (a.a + (10 * b.a) + (100 * c.a) + (1000 * d.a) ) DAY AS `DATE_INITIAL`\n"
		+ "FROM (SELECT 0 AS a UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) AS a\n"
		+ "CROSS JOIN (SELECT 0 AS a UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) AS b\n"
		+ "CROSS JOIN (SELECT 0 AS a UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) AS c\n"
		+ "CROSS JOIN (SELECT 0 AS a UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) AS d) temp\n"
		+ "WHERE temp.DATE_INITIAL BETWEEN DATE(#{dateFrom}) AND DATE(#{dateTo})\n"
		+ ") AS date_range\n"
		+ "LEFT JOIN m_pawn_ticket pt ON DATE(pt.CREATE_DATE) = DATE(date_range.DATE_INITIAL) AND CASE WHEN #{branchId} IS NOT NULL THEN pt.BRANCH_ID = #{branchId} ELSE true END\n"
		+ "GROUP BY MONTH(date_range.DATE_INITIAL), YEAR(date_range.DATE_INITIAL)\n"
		+ ") t1\n"
		+ "LEFT JOIN (\n"
		+ "SELECT SUM(CASE WHEN TICKET_STATUS = 'REDEMPTION' THEN 1 ELSE 0 END) redemptionNumber,\n"
		+ "SUM(CASE WHEN TICKET_STATUS = 'REDEMPTION' THEN TOTAL_PAWN_PRICE ELSE 0 END) redemptionPrice,\n"
		+ "SUM(CASE WHEN TICKET_STATUS IN ('REDEMPTION_RENEW','REDEMPTION_ADJUST') THEN 1 ELSE 0 END) perInterestNumber,\n"
		+ "SUM(CASE WHEN TICKET_STATUS IN ('REDEMPTION_RENEW','REDEMPTION_ADJUST') THEN TOTAL_PAWN_PRICE ELSE 0 END) perInterestPrice,\n"
		+ "SUM(ACTUAL_PAY_INTEREST) interestIncome,\n"
		+ "DATE(REDEMPTION_DATE) redemptionDate\n"
		+ "FROM m_pawn_ticket\n"
		+ "WHERE (TICKET_STATUS = 'REDEMPTION_ADJUST' or TICKET_STATUS = 'REDEMPTION_RENEW' or TICKET_STATUS = 'REDEMPTION')\n"
		+ "AND DATE(REDEMPTION_DATE) BETWEEN DATE(#{dateFrom}) AND DATE(#{dateTo})\n"
		+ "AND CASE WHEN #{branchId} IS NOT NULL THEN BRANCH_ID = #{branchId} ELSE true END\n"
		+ "GROUP BY MONTH(REDEMPTION_DATE), YEAR(REDEMPTION_DATE)\n"
		+ ") t2 ON MONTH(t2.redemptionDate) = MONTH(t1.myDate) AND  YEAR(t2.redemptionDate) = YEAR(t1.myDate)\n"        
		+ "ORDER BY t1.myDate\n";

const strFuncs = `ASCII	Returns the ASCII value for the specific character
CHAR_LENGTH	Returns the length of a string (in characters)
CHARACTER_LENGTH	Returns the length of a string (in characters)
CONCAT	Adds two or more expressions together
CONCAT_WS	Adds two or more expressions together with a separator
FIELD	Returns the index position of a value in a list of values
FIND_IN_SET	Returns the position of a string within a list of strings
FORMAT	Formats a number to a format like "#,###,###.##", rounded to a specified number of decimal places
INSERT	Inserts a string within a string at the specified position and for a certain number of characters
INSTR	Returns the position of the first occurrence of a string in another string
LCASE	Converts a string to lower-case
LEFT	Extracts a number of characters from a string (starting from left)
LENGTH	Returns the length of a string (in bytes)
LOCATE	Returns the position of the first occurrence of a substring in a string
LOWER	Converts a string to lower-case
LPAD	Left-pads a string with another string, to a certain length
LTRIM	Removes leading spaces from a string
MID	Extracts a substring from a string (starting at any position)
POSITION	Returns the position of the first occurrence of a substring in a string
REPEAT	Repeats a string as many times as specified
REPLACE	Replaces all occurrences of a substring within a string, with a new substring
REVERSE	Reverses a string and returns the result
RIGHT	Extracts a number of characters from a string (starting from right)
RPAD	Right-pads a string with another string, to a certain length
RTRIM	Removes trailing spaces from a string
SPACE	Returns a string of the specified number of space characters
STRCMP	Compares two strings
SUBSTR	Extracts a substring from a string (starting at any position)
SUBSTRING	Extracts a substring from a string (starting at any position)
SUBSTRING_INDEX	Returns a substring of a string before a specified number of delimiter occurs
TRIM	Removes leading and trailing spaces from a string
UCASE	Converts a string to upper-case
UPPER	Converts a string to upper-case
ABS	Returns the absolute value of a number
ACOS	Returns the arc cosine of a number
ASIN	Returns the arc sine of a number
ATAN	Returns the arc tangent of one or two numbers
ATAN2	Returns the arc tangent of two numbers
AVG	Returns the average value of an expression
CEIL	Returns the smallest integer value that is >= to a number
CEILING	Returns the smallest integer value that is >= to a number
COS	Returns the cosine of a number
COT	Returns the cotangent of a number
COUNT	Returns the number of records returned by a select query
DEGREES	Converts a value in radians to degrees
DIV	Used for integer division
EXP	Returns e raised to the power of a specified number
FLOOR	Returns the largest integer value that is <= to a number
GREATEST	Returns the greatest value of the list of arguments
LEAST	Returns the smallest value of the list of arguments
LN	Returns the natural logarithm of a number
LOG	Returns the natural logarithm of a number, or the logarithm of a number to a specified base
LOG10	Returns the natural logarithm of a number to base 10
LOG2	Returns the natural logarithm of a number to base 2
MAX	Returns the maximum value in a set of values
MIN	Returns the minimum value in a set of values
MOD	Returns the remainder of a number divided by another number
PI	Returns the value of PI
POW	Returns the value of a number raised to the power of another number
POWER	Returns the value of a number raised to the power of another number
RADIANS	Converts a degree value into radians
RAND	Returns a random number
ROUND	Rounds a number to a specified number of decimal places
SIGN	Returns the sign of a number
SIN	Returns the sine of a number
SQRT	Returns the square root of a number
SUM	Calculates the sum of a set of values
TAN	Returns the tangent of a number
TRUNCATE	Truncates a number to the specified number of decimal places
ADDDATE	Adds a time/date interval to a date and then returns the date
ADDTIME	Adds a time interval to a time/datetime and then returns the time/datetime
CURDATE	Returns the current date
CURRENT_DATE	Returns the current date
CURRENT_TIME	Returns the current time
CURRENT_TIMESTAMP	Returns the current date and time
CURTIME	Returns the current time
DATE	Extracts the date part from a datetime expression
DATEDIFF	Returns the number of days between two date values
DATE_ADD	Adds a time/date interval to a date and then returns the date
DATE_FORMAT	Formats a date
DATE_SUB	Subtracts a time/date interval from a date and then returns the date
DAY	Returns the day of the month for a given date
DAYNAME	Returns the weekday name for a given date
DAYOFMONTH	Returns the day of the month for a given date
DAYOFWEEK	Returns the weekday index for a given date
DAYOFYEAR	Returns the day of the year for a given date
EXTRACT	Extracts a part from a given date
FROM_DAYS	Returns a date from a numeric datevalue
HOUR	Returns the hour part for a given date
LAST_DAY	Extracts the last day of the month for a given date
LOCALTIME	Returns the current date and time
LOCALTIMESTAMP	Returns the current date and time
MAKEDATE	Creates and returns a date based on a year and a number of days value
MAKETIME	Creates and returns a time based on an hour, minute, and second value
MICROSECOND	Returns the microsecond part of a time/datetime
MINUTE	Returns the minute part of a time/datetime
MONTH	Returns the month part for a given date
MONTHNAME	Returns the name of the month for a given date
NOW	Returns the current date and time
PERIOD_ADD	Adds a specified number of months to a period
PERIOD_DIFF	Returns the difference between two periods
QUARTER	Returns the quarter of the year for a given date value
SECOND	Returns the seconds part of a time/datetime
SEC_TO_TIME	Returns a time value based on the specified seconds
STR_TO_DATE	Returns a date based on a string and a format
SUBDATE	Subtracts a time/date interval from a date and then returns the date
SUBTIME	Subtracts a time interval from a datetime and then returns the time/datetime
SYSDATE	Returns the current date and time
TIME	Extracts the time part from a given time/datetime
TIME_FORMAT	Formats a time by a specified format
TIME_TO_SEC	Converts a time value into seconds
TIMEDIFF	Returns the difference between two time/datetime expressions
TIMESTAMP	Returns a datetime value based on a date or datetime value
TO_DAYS	Returns the number of days between a date and date "0000-00-00"
WEEK	Returns the week number for a given date
WEEKDAY	Returns the weekday number for a given date
WEEKOFYEAR	Returns the week number for a given date
YEAR	Returns the year part for a given date
YEARWEEK	Returns the year and week number for a given date
BIN	Returns a binary representation of a number
BINARY	Converts a value to a binary string
CASE	Goes through conditions and return a value when the first condition is met
CAST	Converts a value (of any type) into a specified datatype
COALESCE	Returns the first non-null value in a list
CONNECTION_ID	Returns the unique connection ID for the current connection
CONV	Converts a number from one numeric base system to another
CONVERT	Converts a value into the specified datatype or character set
CURRENT_USER	Returns the user name and host name for the MySQL account that the server used to authenticate the current client
DATABASE	Returns the name of the current database
IF	Returns a value if a condition is TRUE, or another value if a condition is FALSE
IFNULL	Return a specified value if the expression is NULL, otherwise return the expression
ISNULL	Returns 1 or 0 depending on whether an expression is NULL
LAST_INSERT_ID	Returns the AUTO_INCREMENT id of the last row that has been inserted or updated in a table
NULLIF	Compares two expressions and returns NULL if they are equal. Otherwise, the first expression is returned
SESSION_USER	Returns the current MySQL user name and host name
SYSTEM_USER	Returns the current MySQL user name and host name
USER	Returns the current MySQL user name and host name
VERSION	Returns the current version of the MySQL database
`;


const arrReserv = [];
const arrWhite = [' ', '\t', '\r', '\n'];
const opers = ['+', '-', '*', '/', '%', '&', '|', '^', '=', '>', '<', '>=', '<=', '<>'];
function getFirstWord(str) {
	const arr = str.split("");

	let strOut = "";
	let nTabCount = 0;
	for (let i = 0; i < arr.length; i++) {
		const c = arr[i];
		if (c == ')') {
			strOut += ")";
			if (nTabCount) nTabCount--;
		}
		else if (c == '(') {
			if (!nTabCount && strOut) {
				return strOut;
			}
			strOut += "(";
			nTabCount++;
		}
		else if (nTabCount) {
			strOut += c;
		}
		else if (strOut && !nTabCount && (arrWhite.includes(c) || c == '(' || c == ',')) {
			return strOut;
		}
		else {
			strOut += c;
		}
	}
	return strOut;
}

function formatTab(sql, tabLevel) {
	if (!tabLevel) tabLevel = 0;
	let isAfterGroup = false;
	let isAfterFrom = false;
	let isAfterSelect = false;
	let newSql = "";
	let arr = sql.split("");
	let isWhite = false;
	for (let i = 0; i < arr.length; i++) {
		const c = arr[i];
		if (arrWhite.includes(c)) {
			if (!isWhite) {
				isWhite = true;
				newSql += " ";
			}
			continue;
		}
		else if (c == "," && isAfterSelect) {
			isWhite = true;
			newSql += ",\n" + "\t".repeat(tabLevel + 1);
			continue;
		}

		isWhite = false;

		const word = getFirstWord(sql.substr(i));

		//console.log("Got word", word);

		if (word.indexOf("(") == 0) {
			let isClose = false;
			if (isAfterFrom) {
				newSql += "\n" + "\t".repeat(tabLevel + 1) + ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n";
				isClose = true;
				newSql += "\n" + "\t".repeat(tabLevel + 1);
				isAfterFrom = false;
			}
			newSql += "(" + formatTab(word.substr(1, word.length - 2), tabLevel + 1) + ")";
			i += word.length - 1;
			if (isClose) {
				newSql += "\n" + "\t".repeat(tabLevel + 1) + "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\n";
				isAfterGroup = true;
				isWhite = true;
			}
		}
		else {
			const cWord = word.toUpperCase();
			if (cWord == "SELECT") {
				newSql += "SELECT\n" + "\t".repeat(tabLevel + 1);
				isWhite = true;
				isAfterSelect = true;
				isAfterFrom = false;
				i += 5;
			}
			else if (cWord == "FROM") {
				newSql += "\n" + "\t".repeat(tabLevel);
				newSql += word;
				isAfterSelect = false;
				isAfterFrom = true;
				i += 3;
			}
			else if (cWord == "JOIN") {
				newSql += word;
				isAfterFrom = true;
				i += 3;
			}
			else if (["LEFT", "RIGHT", "INNER", "CROSS", "WHERE", "ORDER", "GROUP", "LIMIT", "ON", "AND"].includes(cWord)) {
				newSql += "\n" + "\t".repeat(tabLevel);
				newSql += word;
				i += word.length - 1;
				isAfterFrom = false;

				if (["WHERE", "ON", "AND", "OR"].includes(cWord)) {
					newSql += "\n" + "\t".repeat(tabLevel + 1);
					isWhite = true;
				}
			}
			else {
				if (isAfterGroup) {
					newSql += "\t".repeat(tabLevel);
				}
				newSql += word;
				i += word.length - 1;
				isAfterFrom = false;
			}
			isAfterGroup = false;
		}


	}
	
	return newSql;
}

function findRestrict(str) {
	const arr = str.split("\n");
	
	for (let i = 0; i < arr.length; i++) {
		const word = arr[i].trim();
		if (!word) continue;
		if (/\s\(R\)$/.test(word)) {
			arrReserv.push(word.substr(0, word.length - 4));
		}
	}
}

function allFunctions() {
	const lines = strFuncs.split("\n");
	const arr = [];
	for (let i = 0; i < lines.length; i++) {
		const line = lines[i].trim();
		const [name, desc] = line.split("\t");
		arr.push(name);
	}
	_fs.writeFileSync("functions.txt", JSON.stringify(arr));
}

async function main() {
	// console.log(getFirstWord(`(ABCD, aaa, eiei) (EFG) HIJK`));
	// findRestrict(restrict);
	// _fs.writeFileSync("reserved.txt", JSON.stringify(arrReserv));
	// console.log(formatTab(`SELECT a, b, c FROM (SELECT * FROM aaaa) a LEFT JOIN bbbb b ON a.ASDF = b.ID`));
	// console.log(formatTab(sql));
	allFunctions();
	console.log("Okay");
}

main();